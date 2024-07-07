import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDTO } from './dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDTO: CreateProductDTO) {
    return this.productService.create(createProductDTO);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }
}
