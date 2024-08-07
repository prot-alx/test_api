import { Controller, Post, Body, Get } from '@nestjs/common';
import { ColorService } from './colors.service';
import { ColorDTO } from './dto';
import { Color } from './model/color.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  //Для добавления массива размеров
  @ApiTags('Products')
  @Post('bulk')
  async bulkCreate(@Body() colorsDTOs: ColorDTO[]): Promise<Color[]> {
    return this.colorService.bulkCreateColors(colorsDTOs);
  }

  @ApiTags('Products')
  @Post()
  async create(@Body() createColorDto: ColorDTO): Promise<Color> {
    return this.colorService.create(createColorDto);
  }

  @ApiTags('Products')
  @Get()
  async findAll(): Promise<Color[]> {
    return this.colorService.findAll();
  }
}
