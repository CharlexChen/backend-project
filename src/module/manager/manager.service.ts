import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/entities/Admin.entity';
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ManagerService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Admin)
    private adminsRepository: Repository<Admin>,
  ) {}
  findByUsername(username: string) {
    return this.usersRepository.findBy({
      username,
    });
  }
  insertUser(username: string, password: string) {
    const userObj = new User();
    userObj.username = username;
    userObj.password = password;
    userObj.phone = '136467284248';
    userObj.gender = 1;
    userObj.avatar = 'http://example.com';
    userObj.lastLoginAppid = '187239hdashfiuash';
    userObj.email = '123@qq.com';
    userObj.createTime = new Date();
    userObj.updateTime = new Date();
    return this.usersRepository.save([userObj]);
  }
  insertAdmin(username: string, password: string, userId: number) {
    const adminObj = new Admin();
    adminObj.username = username;
    adminObj.password = password;
    adminObj.userId = userId;
    adminObj.status = 1;
    adminObj.createTime = new Date();
    adminObj.updateTime = new Date();
    return this.adminsRepository.save([adminObj]);
  }
  selectFromAdmin(username: string, password: string) {
    return this.adminsRepository.findBy({
      username: username,
      password: password,
    });
  }
}
