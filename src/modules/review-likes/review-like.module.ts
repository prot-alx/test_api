import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReviewLike } from './model/review-likes.model';
import { ReviewLikeService } from './review-like.service';
import { ReviewLikeController } from './review-like.controller';

@Module({
  imports: [SequelizeModule.forFeature([ReviewLike])],
  controllers: [ReviewLikeController],
  providers: [ReviewLikeService],
})
export class ReviewLikeModule {}
