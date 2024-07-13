import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { City } from './model/cities.model';
import { CreateCityDTO, UpdateCityDTO } from './dto';

@Injectable()
export class CityService {
  constructor(
    @InjectModel(City)
    private readonly cityModel: typeof City,
  ) {}
  async findAllCitiesSorted(): Promise<City[]> {
    const countries = await this.cityModel.findAll();
    const cityWithIdOne = countries.find((city) => city.id === 1);
    const sortedCities = countries
      .filter((city) => city.id !== 1)
      .sort((a, b) => a.name.localeCompare(b.name));
    if (cityWithIdOne) {
      sortedCities.unshift(cityWithIdOne);
    }
    return sortedCities;
  }

  async findAllCitiesByCountryId(countryId: number): Promise<City[]> {
    const cities = await this.cityModel.findAll({
      where: { country_id: countryId },
    });
    if (!cities || cities.length === 0) {
      throw new NotFoundException(
        `No cities found for country with ID ${countryId}`,
      );
    }
    return cities;
  }

  async createCity(createCityDTO: CreateCityDTO): Promise<City> {
    return await this.cityModel.create(createCityDTO);
  }

  async updateCity(id: number, updateCityDTO: UpdateCityDTO): Promise<City> {
    const city = await this.cityModel.findByPk(id);
    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    await city.update(updateCityDTO);
    return city.reload();
  }

  async deleteCity(id: number): Promise<void> {
    const city = await this.cityModel.findByPk(id);
    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    await city.destroy();
  }

  async findCityById(id: number): Promise<City> {
    const city = await this.cityModel.findByPk(id);
    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    return city;
  }

  async findAllCities(): Promise<City[]> {
    return await this.cityModel.findAll();
  }

  async bulkCreateCities(createCityDTOs: CreateCityDTO[]): Promise<City[]> {
    return await this.cityModel.bulkCreate(createCityDTOs);
  }
}
