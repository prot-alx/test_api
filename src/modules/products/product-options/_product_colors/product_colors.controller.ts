import { Controller, Post, Body } from '@nestjs/common';
import { ProductColorService } from './product_colors.service';
import { CreateProductColorDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('product-colors')
export class ProductColorController {
  constructor(private readonly productColorService: ProductColorService) {}

  @Post()
  @ApiTags('Products')
  async create(@Body() createProductColorDTO: CreateProductColorDTO) {
    return this.productColorService.create(createProductColorDTO);
  }
}
