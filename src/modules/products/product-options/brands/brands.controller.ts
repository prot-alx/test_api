import { Controller, Post, Body, Get } from '@nestjs/common';
import { BrandService } from './brands.service';
import { BrandDTO } from './dto';
import { Brand } from './model/brand.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @ApiTags('Products')
  @Post()
  async create(@Body() createBrandDto: BrandDTO): Promise<Brand> {
    return this.brandService.create(createBrandDto);
  }

  @ApiTags('Products')
  @Get()
  async findAll(): Promise<Brand[]> {
    return this.brandService.findAll();
  }
}
