// location/countries/country.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Country } from './model/countries.model';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';

@Module({
  imports: [SequelizeModule.forFeature([Country])],
  providers: [CountryService],
  controllers: [CountryController],
  exports: [SequelizeModule],
})
export class CountryModule {}
