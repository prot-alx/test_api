import { Controller, Post, Body } from '@nestjs/common';
import { ProductSizeService } from './product_sizes.service';
import { CreateProductSizeDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';
import { ProductSize } from './model/product_size.model';

@Controller('product-sizes')
export class ProductSizeController {
  constructor(private readonly productSizeService: ProductSizeService) {}

  @Post()
  @ApiTags('Products')
  async create(
    @Body() createProductSizeDTO: CreateProductSizeDTO,
  ): Promise<ProductSize> {
    return this.productSizeService.create(createProductSizeDTO);
  }
}
