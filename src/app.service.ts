import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }
  insertOne() {
    const userObj = new User();
    userObj.username = 'SuperMan2';
    userObj.password = '1234567';
    userObj.phone = '136467284248';
    userObj.gender = 1;
    userObj.avatar = 'http://example.com';
    userObj.lastLoginAppid = '187239hdashfiuash';
    userObj.email = '123@qq.com';
    userObj.createTime = new Date();
    userObj.updateTime = new Date();
    return this.usersRepository.save([userObj]);
  }
  updateOne() {
    const userObj = new User();
    userObj.password = '111111';
    return this.usersRepository.update(1, userObj);
  }
  updateOneBySave() {
    const userObj = new User();
    userObj.id = 2;
    userObj.password = '222222';
    return this.usersRepository.save(userObj);
  }
  delete() {
    return this.usersRepository.delete(1);
  }
}
