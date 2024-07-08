import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Material } from './model/material.model';
import { MaterialDTO } from './dto/index';

@Injectable()
export class MaterialService {
  constructor(
    @InjectModel(Material)
    private materialModel: typeof Material,
  ) {}

  async create(createMaterialDto: MaterialDTO): Promise<Material> {
    return this.materialModel.create(createMaterialDto);
  }

  async findAll(): Promise<Material[]> {
    return this.materialModel.findAll();
  }

  async bulkCreateMaterials(materialDTOs: MaterialDTO[]): Promise<Material[]> {
    return await this.materialModel.bulkCreate(materialDTOs);
  }
}
