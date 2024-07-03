import { Module } from '@nestjs/common';
import { ProductColorsController } from './product_colors.controller';
import { ProductColorsService } from './product_colors.service';

@Module({
  controllers: [ProductColorsController],
  providers: [ProductColorsService],
})
export class ProductColorsModule {}
