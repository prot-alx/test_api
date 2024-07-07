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

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  createCity(@Body() createCityDTO: CreateCityDTO) {
    return this.cityService.createCity(createCityDTO);
  }

  @Put(':id')
  updateCity(@Param('id') id: number, @Body() updateCityDTO: UpdateCityDTO) {
    return this.cityService.updateCity(id, updateCityDTO);
  }

  @Delete(':id')
  deleteCity(@Param('id') id: number) {
    return this.cityService.deleteCity(id);
  }

  @Get(':id')
  findCityById(@Param('id') id: number) {
    return this.cityService.findCityById(id);
  }

  @Get()
  findAllCities() {
    return this.cityService.findAllCities();
  }
}
