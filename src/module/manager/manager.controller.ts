import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { ManagerService } from './manager.service';
import * as md5 from 'md5';
import { checkUserForm, generateRandomString } from 'src/utils';
import { getFromRedis, setFromRedis } from 'src/utils/redis';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}
  @Post('/register')
  async register(@Req() req) {
    const query = req.body;
    const checkResult = checkUserForm(query.username, query.password);
    if (checkResult.error_code !== 0) {
      return checkResult;
    }
    if (query.username == query.password) {
      return {
        error_code: -4,
        message: '用户名和密码不得相同',
        data: {},
      };
    }
    const existUser = await this.managerService.findByUsername(query.username);
    if (existUser.length > 0) {
      return {
        error_code: -5,
        message: '用户名已存在无法进行注册',
        data: {},
      };
    }
    const saltPassword = md5(query.password);
    const resp = await this.managerService.insertUser(
      query.username,
      saltPassword,
    ); // 4
    if (resp[0] && resp[0].id) {
      // 插入数据到管理员数据表
      await this.managerService.insertAdmin(
        query.username,
        saltPassword,
        resp[0].id,
      );
    }
    return {
      error_code: 0,
      message: '注册成功',
      data: {},
    };
  }
  @Post('/login')
  async login(@Req() req) {
    const body = req.body;
    const { username, password } = body;
    const checkResult = checkUserForm(username, password);
    if (checkResult.error_code !== 0) {
      return checkResult;
    }
    const saltPassword = md5(password);
    const resp = await this.managerService.selectFromAdmin(
      username,
      saltPassword,
    );
    if (resp.length > 0) {
      const randomStr = Date.now() + generateRandomString();
      setFromRedis(randomStr, JSON.stringify(resp[0]));
      return {
        error_code: 0,
        message: '登陆成功 ' + username,
        data: {
          token: randomStr,
        },
      };
    } else {
      return {
        error_code: -2,
        message: '用户名或密码错误',
        data: {},
      };
    }
  }
  @Post('/sensitive')
  async sensitiveHandler(@Req() req) {
    const key = req.headers.token;
    const userInfo = await getFromRedis(key);
    if (!userInfo) {
      return {
        error_code: 401,
        message: '登陆已过期',
        data: {},
      };
    }
    return {
      error_code: 0,
      message: 'success',
      data: userInfo && JSON.parse(userInfo),
    };
  }
}
