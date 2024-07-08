import {
  Controller,
  UseGuards,
  Post,
  Req,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { CreateReviewDTO, UpdateReviewDTO } from './dto';
import { Review } from './model/reviews.model';
import { ReviewService } from './review.service';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addReview(@Req() req, @Body() dto: CreateReviewDTO): Promise<Review> {
    return this.reviewService.createReview(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':reviewId')
  async updateReview(
    @Req() req,
    @Param('reviewId') reviewId: number,
    @Body() dto: UpdateReviewDTO,
  ): Promise<Review> {
    return this.reviewService.updateReview(req.user.id, reviewId, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':reviewId')
  async deleteReview(
    @Req() req,
    @Param('reviewId') reviewId: number,
  ): Promise<Review> {
    return this.reviewService.deleteReview(req.user.id, reviewId);
  }
}
