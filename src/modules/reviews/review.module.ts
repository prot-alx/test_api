import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Review } from './model/reviews.model';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';

@Module({
  imports: [SequelizeModule.forFeature([Review])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
