import { Controller, Post, Body, Get } from '@nestjs/common';
import { MaterialService } from './materials.service';
import { MaterialDTO } from './dto/index';
import { Material } from './model/material.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  //Для добавления массива размеров
  @ApiTags('Products')
  @Post('bulk')
  async bulkCreate(@Body() createCityDTOs: MaterialDTO[]): Promise<Material[]> {
    return this.materialService.bulkCreateMaterials(createCityDTOs);
  }

  @ApiTags('Products')
  @Post()
  async create(@Body() createMaterialDto: MaterialDTO): Promise<Material> {
    return this.materialService.create(createMaterialDto);
  }

  @ApiTags('Products')
  @Get()
  async findAll(): Promise<Material[]> {
    return this.materialService.findAll();
  }
}
