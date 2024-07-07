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

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  createCountry(@Body() createCountryDTO: CreateCountryDTO) {
    return this.countryService.createCountry(createCountryDTO);
  }

  @Put(':id')
  updateCountry(
    @Param('id') id: number,
    @Body() updateCountryDTO: UpdateCountryDTO,
  ) {
    return this.countryService.updateCountry(id, updateCountryDTO);
  }

  @Delete(':id')
  deleteCountry(@Param('id') id: number) {
    return this.countryService.deleteCountry(id);
  }

  @Get(':id')
  findCountryById(@Param('id') id: number) {
    return this.countryService.findCountryById(id);
  }

  @Get()
  findAllCountries() {
    return this.countryService.findAllCountries();
  }
}
