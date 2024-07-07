import { Controller, Post, Body } from '@nestjs/common';
import { ProductColorService } from './product_colors.service';
import { CreateProductColorDTO } from './dto';

@Controller('product-colors')
export class ProductColorController {
  constructor(private readonly productColorService: ProductColorService) {}

  @Post()
  async create(@Body() createProductColorDTO: CreateProductColorDTO) {
    return this.productColorService.create(createProductColorDTO);
  }
}
