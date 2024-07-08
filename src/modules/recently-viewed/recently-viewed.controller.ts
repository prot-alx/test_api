import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { RecentlyViewedService } from './recently-viewed.service';
import { CreateRecentlyViewedDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('recently-viewed')
export class RecentlyViewedController {
  constructor(private readonly recentlyViewedService: RecentlyViewedService) {}

  @Post()
  @ApiTags('Recently-viewed')
  createRecentlyViewed(
    @Body() createRecentlyViewedDTO: CreateRecentlyViewedDTO,
  ) {
    return this.recentlyViewedService.createRecentlyViewed(
      createRecentlyViewedDTO,
    );
  }

  @Delete(':id')
  @ApiTags('Recently-viewed')
  deleteRecentlyViewed(@Param('id') id: number) {
    return this.recentlyViewedService.deleteRecentlyViewed(id);
  }

  @Get(':id')
  @ApiTags('Recently-viewed')
  findRecentlyViewedById(@Param('id') id: number) {
    return this.recentlyViewedService.findRecentlyViewedById(id);
  }

  @Get()
  @ApiTags('Recently-viewed')
  findAllRecentlyViewed() {
    return this.recentlyViewedService.findAllRecentlyViewed();
  }
}
