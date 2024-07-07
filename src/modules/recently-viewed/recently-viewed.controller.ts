import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { RecentlyViewedService } from './recently-viewed.service';
import { CreateRecentlyViewedDTO } from './dto';

@Controller('recently-viewed')
export class RecentlyViewedController {
  constructor(private readonly recentlyViewedService: RecentlyViewedService) {}

  @Post()
  createRecentlyViewed(
    @Body() createRecentlyViewedDTO: CreateRecentlyViewedDTO,
  ) {
    return this.recentlyViewedService.createRecentlyViewed(
      createRecentlyViewedDTO,
    );
  }

  @Delete(':id')
  deleteRecentlyViewed(@Param('id') id: number) {
    return this.recentlyViewedService.deleteRecentlyViewed(id);
  }

  @Get(':id')
  findRecentlyViewedById(@Param('id') id: number) {
    return this.recentlyViewedService.findRecentlyViewedById(id);
  }

  @Get()
  findAllRecentlyViewed() {
    return this.recentlyViewedService.findAllRecentlyViewed();
  }
}
