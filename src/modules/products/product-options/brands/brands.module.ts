import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BrandService } from './brands.service';
import { BrandController } from './brands.controller';
import { Brand } from './model/brand.model';

@Module({
  imports: [SequelizeModule.forFeature([Brand])],
  providers: [BrandService],
  controllers: [BrandController],
})
export class BrandModule {}
