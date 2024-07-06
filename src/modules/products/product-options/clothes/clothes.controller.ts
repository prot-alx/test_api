import { Controller, Post, Body, Get } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { ClothesDTO } from './dto/index';
import { Clothes } from './model/clothes.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('clothes')
export class ClothesController {
  constructor(private readonly clothesService: ClothesService) {}

  @ApiTags('Products')
  @Post()
  async create(@Body() createClothesDto: ClothesDTO): Promise<Clothes> {
    return this.clothesService.create(createClothesDto);
  }

  @ApiTags('Products')
  @Get()
  async findAll(): Promise<Clothes[]> {
    return this.clothesService.findAll();
  }
}
