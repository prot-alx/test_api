// material.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MaterialService } from './materials.service';
import { MaterialController } from './materials.controller';
import { Material } from './model/material.model';

@Module({
  imports: [SequelizeModule.forFeature([Material])],
  providers: [MaterialService],
  controllers: [MaterialController],
})
export class MaterialModule {}
