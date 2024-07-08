import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { RecentlyViewedService } from './recently-viewed.service';
import { CreateRecentlyViewedDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';
import { RecentlyViewed } from './model/recently-viewed.model';

@Controller('recently-viewed')
export class RecentlyViewedController {
  constructor(private readonly recentlyViewedService: RecentlyViewedService) {}

  @Post()
  @ApiTags('Recently-viewed')
  createRecentlyViewed(
    @Body() createRecentlyViewedDTO: CreateRecentlyViewedDTO,
  ): Promise<RecentlyViewed> {
    return this.recentlyViewedService.createRecentlyViewed(
      createRecentlyViewedDTO,
    );
  }

  @Delete(':id')
  @ApiTags('Recently-viewed')
  deleteRecentlyViewed(@Param('id') id: number): Promise<void> {
    return this.recentlyViewedService.deleteRecentlyViewed(id);
  }

  @Get(':id')
  @ApiTags('Recently-viewed')
  findRecentlyViewedById(@Param('id') id: number): Promise<RecentlyViewed> {
    return this.recentlyViewedService.findRecentlyViewedById(id);
  }

  @Get()
  @ApiTags('Recently-viewed')
  findAllRecentlyViewed(): Promise<RecentlyViewed[]> {
    return this.recentlyViewedService.findAllRecentlyViewed();
  }
}
