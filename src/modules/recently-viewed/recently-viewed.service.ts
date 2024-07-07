import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RecentlyViewed } from './model/recently-viewed.model';
import { CreateRecentlyViewedDTO } from './dto';

@Injectable()
export class RecentlyViewedService {
  constructor(
    @InjectModel(RecentlyViewed)
    private readonly recentlyViewedModel: typeof RecentlyViewed,
  ) {}

  async createRecentlyViewed(
    createRecentlyViewedDTO: CreateRecentlyViewedDTO,
  ): Promise<RecentlyViewed> {
    return await this.recentlyViewedModel.create(createRecentlyViewedDTO);
  }

  async deleteRecentlyViewed(id: number): Promise<void> {
    const recentlyViewed = await this.recentlyViewedModel.findByPk(id);
    if (!recentlyViewed) {
      throw new NotFoundException(`RecentlyViewed with ID ${id} not found`);
    }
    await recentlyViewed.destroy();
  }

  async findRecentlyViewedById(id: number): Promise<RecentlyViewed> {
    const recentlyViewed = await this.recentlyViewedModel.findByPk(id);
    if (!recentlyViewed) {
      throw new NotFoundException(`RecentlyViewed with ID ${id} not found`);
    }
    return recentlyViewed;
  }

  async findAllRecentlyViewed(): Promise<RecentlyViewed[]> {
    return await this.recentlyViewedModel.findAll();
  }
}
