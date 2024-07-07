import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ReviewLike } from './model/review-likes.model';
import { CreateReviewLikeDTO } from './dto';

@Injectable()
export class ReviewLikeService {
  constructor(
    @InjectModel(ReviewLike)
    private readonly reviewLikeModel: typeof ReviewLike,
  ) {}

  async createReviewLike(
    createReviewLikeDTO: CreateReviewLikeDTO,
  ): Promise<ReviewLike> {
    return await this.reviewLikeModel.create(createReviewLikeDTO);
  }

  async updateReviewLike(id: number, like: boolean): Promise<ReviewLike> {
    const reviewLike = await this.reviewLikeModel.findByPk(id);
    if (!reviewLike) {
      throw new NotFoundException(`ReviewLike with ID ${id} not found`);
    }
    await reviewLike.update({ like });
    return reviewLike.reload();
  }

  async deleteReviewLike(id: number): Promise<void> {
    const reviewLike = await this.reviewLikeModel.findByPk(id);
    if (!reviewLike) {
      throw new NotFoundException(`ReviewLike with ID ${id} not found`);
    }
    await reviewLike.destroy();
  }

  async findReviewLikeById(id: number): Promise<ReviewLike> {
    const reviewLike = await this.reviewLikeModel.findByPk(id);
    if (!reviewLike) {
      throw new NotFoundException(`ReviewLike with ID ${id} not found`);
    }
    return reviewLike;
  }

  async findAllReviewLikes(): Promise<ReviewLike[]> {
    return await this.reviewLikeModel.findAll();
  }
}
