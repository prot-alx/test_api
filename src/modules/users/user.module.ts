// users/user.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './models/user.model';
import { CountryModule } from '../countries/country.module';

@Module({
  imports: [SequelizeModule.forFeature([User]), CountryModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
