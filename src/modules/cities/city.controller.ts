import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDTO, UpdateCityDTO } from './dto';
import { City } from './model/cities.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  @ApiTags('Location')
  createCity(@Body() createCityDTO: CreateCityDTO) {
    return this.cityService.createCity(createCityDTO);
  }

  //Для добавления массива городов
  @Post('bulk')
  @ApiTags('Location')
  async bulkCreate(@Body() createCityDTOs: CreateCityDTO[]): Promise<City[]> {
    return this.cityService.bulkCreateCities(createCityDTOs);
  }

  @Put(':id')
  @ApiTags('Location')
  updateCity(@Param('id') id: number, @Body() updateCityDTO: UpdateCityDTO) {
    return this.cityService.updateCity(id, updateCityDTO);
  }

  @Delete(':id')
  @ApiTags('Location')
  deleteCity(@Param('id') id: number) {
    return this.cityService.deleteCity(id);
  }

  @Get(':id')
  @ApiTags('Location')
  findCityById(@Param('id') id: number) {
    return this.cityService.findCityById(id);
  }

  @Get()
  @ApiTags('Location')
  findAllCities() {
    return this.cityService.findAllCities();
  }
}
