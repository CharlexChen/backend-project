import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { App } from './entities/App.entity';
import { Admin } from './entities/Admin.entity';
import { ManagerModule } from './module/manager/manager.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'user_center',
      synchronize: true,
      logging: true,
      entities: [User, App, Admin],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    TypeOrmModule.forFeature([User]),
    ManagerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
