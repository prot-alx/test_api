import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto } from './dto';
import { Product } from './models/product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }
}
