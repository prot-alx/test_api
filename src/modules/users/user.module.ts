import { Module } from '@nestjs/common';
import { GetProfile, UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController, GetProfile],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
