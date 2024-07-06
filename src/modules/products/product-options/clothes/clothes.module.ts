// clothes.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClothesService } from './clothes.service';
import { ClothesController } from './clothes.controller';
import { Clothes } from './model/clothes.model';

@Module({
  imports: [SequelizeModule.forFeature([Clothes])],
  providers: [ClothesService],
  controllers: [ClothesController],
})
export class ClothesModule {}
