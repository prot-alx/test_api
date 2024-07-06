import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Brand } from './model/brand.model';
import { BrandDTO } from './dto/index';

@Injectable()
export class BrandService {
  constructor(
    @InjectModel(Brand)
    private brandModel: typeof Brand,
  ) {}

  async create(createBrandDto: BrandDTO): Promise<Brand> {
    return this.brandModel.create(createBrandDto);
  }

  async findAll(): Promise<Brand[]> {
    return this.brandModel.findAll();
  }
}
