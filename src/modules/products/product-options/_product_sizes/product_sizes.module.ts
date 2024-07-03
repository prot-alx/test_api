import { Module } from '@nestjs/common';
import { ProductSizesController } from './product_sizes.controller';
import { ProductSizesService } from './product_sizes.service';

@Module({
  controllers: [ProductSizesController],
  providers: [ProductSizesService]
})
export class ProductSizesModule {}
