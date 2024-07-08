import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Review } from './model/reviews.model';
import { CreateReviewDTO } from './dto';
import { UpdateReviewDTO } from './dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review)
    private readonly reviewModel: typeof Review,
  ) {}

  async createReview(userId: number, dto: CreateReviewDTO) {
    return this.reviewModel.create({ ...dto, user_id: userId });
  }

  async updateReview(userId: number, reviewId: number, dto: UpdateReviewDTO) {
    const review = await this.reviewModel.findByPk(reviewId);
    if (review.user_id !== userId) {
      throw new UnauthorizedException();
    }
    await review.update(dto);
    return review;
  }

  async deleteReview(userId: number, reviewId: number) {
    const review = await this.reviewModel.findByPk(reviewId);
    if (review.user_id !== userId) {
      throw new UnauthorizedException();
    }
    await review.destroy();
    return review;
  }
}
