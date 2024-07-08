import { Controller, Post, Body } from '@nestjs/common';
import { ProductSizeService } from './product_sizes.service';
import { CreateProductSizeDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('product-sizes')
export class ProductSizeController {
  constructor(private readonly productSizeService: ProductSizeService) {}

  @Post()
  @ApiTags('Products')
  async create(@Body() createProductSizeDTO: CreateProductSizeDTO) {
    return this.productSizeService.create(createProductSizeDTO);
  }
}
