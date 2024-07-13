import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './model/countries.model';
import { CreateCountryDTO, UpdateCountryDTO } from './dto';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country)
    private readonly countryModel: typeof Country,
  ) {}

  async createCountry(createCountryDTO: CreateCountryDTO): Promise<Country> {
    return await this.countryModel.create(createCountryDTO);
  }

  async updateCountry(
    id: number,
    updateCountryDTO: UpdateCountryDTO,
  ): Promise<Country> {
    const country = await this.countryModel.findByPk(id);
    if (!country) {
      throw new NotFoundException(`Country with ID ${id} not found`);
    }
    await country.update(updateCountryDTO);
    return country.reload();
  }

  async deleteCountry(id: number): Promise<void> {
    const country = await this.countryModel.findByPk(id);
    if (!country) {
      throw new NotFoundException(`Country with ID ${id} not found`);
    }
    await country.destroy();
  }

  async findCountryById(id: number): Promise<Country> {
    const country = await this.countryModel.findByPk(id);
    if (!country) {
      throw new NotFoundException(`Country with ID ${id} not found`);
    }
    return country;
  }

  async findAllCountries(): Promise<Country[]> {
    return await this.countryModel.findAll();
  }

  async bulkCreateCountries(
    createCountryDTOs: CreateCountryDTO[],
  ): Promise<Country[]> {
    return await this.countryModel.bulkCreate(createCountryDTOs);
  }

  async findAllCountriesSorted(): Promise<Country[]> {
    const countries = await this.countryModel.findAll();
    const countryWithIdOne = countries.find((country) => country.id === 1);
    const sortedCountries = countries
      .filter((country) => country.id !== 1)
      .sort((a, b) => a.name.localeCompare(b.name));
    if (countryWithIdOne) {
      sortedCountries.unshift(countryWithIdOne);
    }
    return sortedCountries;
  }
}
