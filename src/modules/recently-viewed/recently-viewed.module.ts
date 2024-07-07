import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RecentlyViewed } from './model/recently-viewed.model';
import { RecentlyViewedService } from './recently-viewed.service';
import { RecentlyViewedController } from './recently-viewed.controller';

@Module({
  imports: [SequelizeModule.forFeature([RecentlyViewed])],
  controllers: [RecentlyViewedController],
  providers: [RecentlyViewedService],
})
export class RecentlyViewedModule {}
