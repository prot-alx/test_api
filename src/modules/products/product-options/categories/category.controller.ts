import { Controller, Post, Body, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './dto';
import { Category } from './model/category.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiTags('Products')
  @Post()
  async create(@Body() createCategoryDto: CategoryDTO): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }

  @ApiTags('Products')
  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }
}
