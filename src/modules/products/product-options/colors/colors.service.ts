import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Color } from './model/color.model';
import { ColorDTO } from './dto';

@Injectable()
export class ColorService {
  constructor(
    @InjectModel(Color)
    private colorModel: typeof Color,
  ) {}

  async create(createColorDto: ColorDTO): Promise<Color> {
    return this.colorModel.create(createColorDto);
  }

  async findAll(): Promise<Color[]> {
    return this.colorModel.findAll();
  }

  async bulkCreateColors(colorsDTOs: ColorDTO[]): Promise<Color[]> {
    return await this.colorModel.bulkCreate(colorsDTOs);
  }
}
