import { Controller, Post, Body } from '@nestjs/common';
import { ProductCategoryService } from './product_categories.service';
import { CreateProductCategoryDTO } from './dto';

@Controller('product-categories')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Post()
  async create(@Body() createProductCategoryDTO: CreateProductCategoryDTO) {
    return this.productCategoryService.create(createProductCategoryDTO);
  }
}
