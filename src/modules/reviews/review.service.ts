import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Review } from './model/reviews.model';
import { CreateReviewDTO, UpdateReviewDTO } from './dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review)
    private readonly reviewModel: typeof Review,
  ) {}

  async createReview(createReviewDTO: CreateReviewDTO): Promise<Review> {
    return await this.reviewModel.create(createReviewDTO);
  }

  async updateReview(
    id: number,
    updateReviewDTO: UpdateReviewDTO,
  ): Promise<Review> {
    const review = await this.reviewModel.findByPk(id);
    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
    await review.update(updateReviewDTO);
    return review.reload();
  }

  async deleteReview(id: number): Promise<void> {
    const review = await this.reviewModel.findByPk(id);
    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
    await review.destroy();
  }

  async findReviewById(id: number): Promise<Review> {
    const review = await this.reviewModel.findByPk(id);
    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
    return review;
  }

  async findAllReviews(): Promise<Review[]> {
    return await this.reviewModel.findAll();
  }
}
