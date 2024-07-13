import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDTO } from './dto';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { Product } from './models/product.model';

@Controller('products')
@ApiTags('Products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDTO: CreateProductDTO): Promise<Product> {
    return this.productService.create(createProductDTO);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get('sorted-and-filtered')
  @ApiQuery({ name: 'sortField', required: false })
  @ApiQuery({ name: 'sortOrder', required: false })
  @ApiQuery({ name: 'minPrice', required: false, type: Number })
  @ApiQuery({ name: 'maxPrice', required: false, type: Number })
  @ApiQuery({ name: 'isSale', required: false, type: Boolean })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'pageSize', required: false, type: Number })
  async findAllSortedAndFiltered(
    @Query('sortField') sortField: string,
    @Query('sortOrder') sortOrder: 'ASC' | 'DESC' = 'ASC',
    @Query('minPrice') minPrice: number,
    @Query('maxPrice') maxPrice: number,
    @Query('isSale') isSale: boolean,
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ): Promise<{ rows: Product[]; count: number }> {
    return this.productService.findAllSortedAndFiltered(
      sortField,
      sortOrder,
      minPrice,
      maxPrice,
      isSale,
      page,
      pageSize,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }
}
