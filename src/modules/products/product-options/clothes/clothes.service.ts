// clothes.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Clothes } from './model/clothes.model';
import { ClothesDTO } from './dto/index';

@Injectable()
export class ClothesService {
  constructor(
    @InjectModel(Clothes)
    private clothesModel: typeof Clothes,
  ) {}

  async create(createClothesDto: ClothesDTO): Promise<Clothes> {
    return this.clothesModel.create(createClothesDto);
  }

  async findAll(): Promise<Clothes[]> {
    return this.clothesModel.findAll();
  }
}
