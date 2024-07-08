import {
  Controller,
  Post,
  Body,
  Put,
  Delete,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDTO } from './dto';
import { UpdateReviewDTO } from './dto';
import { JwtAuthGuard } from '../../guards/jwt-guard';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addReview(@Req() req, @Body() dto: CreateReviewDTO) {
    return this.reviewService.createReview(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':reviewId')
  async updateReview(
    @Req() req,
    @Param('reviewId') reviewId: number,
    @Body() dto: UpdateReviewDTO,
  ) {
    return this.reviewService.updateReview(req.user.id, reviewId, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':reviewId')
  async deleteReview(@Req() req, @Param('reviewId') reviewId: number) {
    return this.reviewService.deleteReview(req.user.id, reviewId);
  }
}
