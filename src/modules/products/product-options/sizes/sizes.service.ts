import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Size } from './model/size.model';
import { SizeDTO } from './dto';

@Injectable()
export class SizeService {
  constructor(
    @InjectModel(Size)
    private sizeModel: typeof Size,
  ) {}

  async create(createSizeDto: SizeDTO): Promise<Size> {
    return this.sizeModel.create(createSizeDto);
  }

  async findAll(): Promise<Size[]> {
    return this.sizeModel.findAll();
  }

  async bulkCreateSizes(sizesDTOs: SizeDTO[]): Promise<Size[]> {
    return await this.sizeModel.bulkCreate(sizesDTOs);
  }
}
