import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/select')
  async select() {
    const temp = await this.appService.findOne(1);
    return JSON.stringify(temp);
  }
  @Get('/insert')
  async insert() {
    const temp = await this.appService.insertOne();
    return JSON.stringify(temp);
  }
  @Get('/update')
  async update() {
    const temp = await this.appService.updateOne();
    return JSON.stringify(temp);
  }
  @Get('/updateBySave')
  async updateBySave() {
    const temp = await this.appService.updateOneBySave();
    return JSON.stringify(temp);
  }
  @Get('/delete')
  async delete() {
    const temp = await this.appService.delete();
    return JSON.stringify(temp);
  }
}
