import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDTO, UpdateReviewDTO } from './dto';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  createReview(@Body() createReviewDTO: CreateReviewDTO) {
    return this.reviewService.createReview(createReviewDTO);
  }

  @Put(':id')
  updateReview(
    @Param('id') id: number,
    @Body() updateReviewDTO: UpdateReviewDTO,
  ) {
    return this.reviewService.updateReview(id, updateReviewDTO);
  }

  @Delete(':id')
  deleteReview(@Param('id') id: number) {
    return this.reviewService.deleteReview(id);
  }

  @Get(':id')
  findReviewById(@Param('id') id: number) {
    return this.reviewService.findReviewById(id);
  }

  @Get()
  findAllReviews() {
    return this.reviewService.findAllReviews();
  }
}
