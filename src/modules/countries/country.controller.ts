import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDTO, UpdateCountryDTO } from './dto';
import { Country } from './model/countries.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  @ApiTags('Location')
  createCountry(@Body() createCountryDTO: CreateCountryDTO) {
    return this.countryService.createCountry(createCountryDTO);
  }

  //Для добавления массива стран
  @Post('bulk')
  @ApiTags('Location')
  async bulkCreate(
    @Body() createCountryDTOs: CreateCountryDTO[],
  ): Promise<Country[]> {
    return this.countryService.bulkCreateCountries(createCountryDTOs);
  }

  @Put(':id')
  @ApiTags('Location')
  updateCountry(
    @Param('id') id: number,
    @Body() updateCountryDTO: UpdateCountryDTO,
  ) {
    return this.countryService.updateCountry(id, updateCountryDTO);
  }

  @Delete(':id')
  @ApiTags('Location')
  deleteCountry(@Param('id') id: number) {
    return this.countryService.deleteCountry(id);
  }

  @Get(':id')
  @ApiTags('Location')
  findCountryById(@Param('id') id: number) {
    return this.countryService.findCountryById(id);
  }

  @Get()
  @ApiTags('Location')
  findAllCountries() {
    return this.countryService.findAllCountries();
  }
}
