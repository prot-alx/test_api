import { Controller, Post, Body, Get } from '@nestjs/common';
import { SizeService } from './sizes.service';
import { SizeDTO } from './dto';
import { Size } from './model/size.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('size')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  //Для добавления массива размеров
  @ApiTags('Products')
  @Post('bulk')
  async bulkCreate(@Body() createCityDTOs: SizeDTO[]): Promise<Size[]> {
    return this.sizeService.bulkCreateSizes(createCityDTOs);
  }

  @ApiTags('Products')
  @Post()
  async create(@Body() createSizeDto: SizeDTO): Promise<Size> {
    return this.sizeService.create(createSizeDto);
  }

  @ApiTags('Products')
  @Get()
  async findAll(): Promise<Size[]> {
    return this.sizeService.findAll();
  }
}
