import { Module } from '@nestjs/common';
import { ManagerController } from './manager.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Admin } from 'src/entities/Admin.entity';
import { App } from 'src/entities/App.entity';
import { ManagerService } from './manager.service';

@Module({
  controllers: [ManagerController],
  imports: [TypeOrmModule.forFeature([User, Admin, App])],
  providers: [ManagerService],
})
export class ManagerModule {}
