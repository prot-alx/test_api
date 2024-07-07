import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ReviewLikeService } from './review-like.service';
import { CreateReviewLikeDTO } from './dto';

@Controller('review-likes')
export class ReviewLikeController {
  constructor(private readonly reviewLikeService: ReviewLikeService) {}

  @Post()
  createReviewLike(@Body() createReviewLikeDTO: CreateReviewLikeDTO) {
    return this.reviewLikeService.createReviewLike(createReviewLikeDTO);
  }

  @Put(':id')
  updateReviewLike(@Param('id') id: number, @Body('like') like: boolean) {
    return this.reviewLikeService.updateReviewLike(id, like);
  }

  @Delete(':id')
  deleteReviewLike(@Param('id') id: number) {
    return this.reviewLikeService.deleteReviewLike(id);
  }

  @Get(':id')
  findReviewLikeById(@Param('id') id: number) {
    return this.reviewLikeService.findReviewLikeById(id);
  }

  @Get()
  findAllReviewLikes() {
    return this.reviewLikeService.findAllReviewLikes();
  }
}
