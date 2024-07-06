import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ColorService } from './colors.service';
import { ColorController } from './colors.controller';
import { Color } from './model/color.model';

@Module({
  imports: [SequelizeModule.forFeature([Color])],
  providers: [ColorService],
  controllers: [ColorController],
})
export class ColorModule {}
