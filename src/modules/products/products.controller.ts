import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';
import { Product } from './models/product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiTags('Products')
  async create(@Body() createProductDTO: CreateProductDTO): Promise<Product> {
    return this.productService.create(createProductDTO);
  }

  @Get()
  @ApiTags('Products')
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiTags('Products')
  async findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }
}
