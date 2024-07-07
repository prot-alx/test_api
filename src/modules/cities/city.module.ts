import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { City } from './model/cities.model';
import { CityService } from './city.service';
import { CityController } from './city.controller';

@Module({
  imports: [SequelizeModule.forFeature([City])],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
