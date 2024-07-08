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
import { ApiTags } from '@nestjs/swagger';
import { ReviewLike } from './model/review-likes.model';

@Controller('review-likes')
export class ReviewLikeController {
  constructor(private readonly reviewLikeService: ReviewLikeService) {}

  @Post()
  @ApiTags('Reviews')
  createReviewLike(
    @Body() createReviewLikeDTO: CreateReviewLikeDTO,
  ): Promise<ReviewLike> {
    return this.reviewLikeService.createReviewLike(createReviewLikeDTO);
  }

  @Put(':id')
  @ApiTags('Reviews')
  updateReviewLike(
    @Param('id') id: number,
    @Body('like') like: boolean,
  ): Promise<ReviewLike> {
    return this.reviewLikeService.updateReviewLike(id, like);
  }

  @Delete(':id')
  @ApiTags('Reviews')
  deleteReviewLike(@Param('id') id: number): Promise<void> {
    return this.reviewLikeService.deleteReviewLike(id);
  }

  @Get(':id')
  @ApiTags('Reviews')
  findReviewLikeById(@Param('id') id: number): Promise<ReviewLike> {
    return this.reviewLikeService.findReviewLikeById(id);
  }

  @Get()
  @ApiTags('Reviews')
  findAllReviewLikes(): Promise<ReviewLike[]> {
    return this.reviewLikeService.findAllReviewLikes();
  }
}
