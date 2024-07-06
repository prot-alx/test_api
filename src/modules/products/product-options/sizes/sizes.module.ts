import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SizeService } from './sizes.service';
import { SizeController } from './sizes.controller';
import { Size } from './model/size.model';

@Module({
  imports: [SequelizeModule.forFeature([Size])],
  providers: [SizeService],
  controllers: [SizeController],
})
export class SizeModule {}
