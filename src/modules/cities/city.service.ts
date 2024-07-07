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
}
