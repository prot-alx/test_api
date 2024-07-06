import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto } from './dto';
import { Product } from './models/product.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiTags('Products')
  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @ApiTags('Products')
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
