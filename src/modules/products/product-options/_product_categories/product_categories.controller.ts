import { Controller, Post, Body } from '@nestjs/common';
import { ProductCategoryService } from './product_categories.service';
import { CreateProductCategoryDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';
import { ProductCategory } from './model/product_category.model';

@Controller('product-categories')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Post()
  @ApiTags('Products')
  async create(
    @Body() createProductCategoryDTO: CreateProductCategoryDTO,
  ): Promise<ProductCategory> {
    return this.productCategoryService.create(createProductCategoryDTO);
  }
}
