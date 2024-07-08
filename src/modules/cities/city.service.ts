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

  cities = [
    { name: 'Не указано', country_id: 1 },
    { name: 'Нью-Йорк', country_id: 2 },
    { name: 'Лос-Анджелес', country_id: 2 },
    { name: 'Чикаго', country_id: 2 },
    { name: 'Торонто', country_id: 3 },
    { name: 'Ванкувер', country_id: 3 },
    { name: 'Монреаль', country_id: 3 },
    { name: 'Берлин', country_id: 4 },
    { name: 'Мюнхен', country_id: 4 },
    { name: 'Гамбург', country_id: 4 },
    { name: 'Париж', country_id: 5 },
    { name: 'Марсель', country_id: 5 },
    { name: 'Лион', country_id: 5 },
    { name: 'Рим', country_id: 6 },
    { name: 'Милан', country_id: 6 },
    { name: 'Неаполь', country_id: 6 },
    { name: 'Мадрид', country_id: 7 },
    { name: 'Барселона', country_id: 7 },
    { name: 'Валенсия', country_id: 7 },
    { name: 'Лондон', country_id: 8 },
    { name: 'Манчестер', country_id: 8 },
    { name: 'Бирмингем', country_id: 8 },
    { name: 'Сидней', country_id: 9 },
    { name: 'Мельбурн', country_id: 9 },
    { name: 'Брисбен', country_id: 9 },
    { name: 'Токио', country_id: 10 },
    { name: 'Осака', country_id: 10 },
    { name: 'Киото', country_id: 10 },
    { name: 'Пекин', country_id: 11 },
    { name: 'Шанхай', country_id: 11 },
    { name: 'Гуанчжоу', country_id: 11 },
  ];

  async bulkCreateCities(createCityDTOs: CreateCityDTO[]): Promise<City[]> {
    return await this.cityModel.bulkCreate(createCityDTOs);
  }
}
