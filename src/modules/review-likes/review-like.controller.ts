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

@Controller('review-likes')
export class ReviewLikeController {
  constructor(private readonly reviewLikeService: ReviewLikeService) {}

  @Post()
  @ApiTags('Reviews')
  createReviewLike(@Body() createReviewLikeDTO: CreateReviewLikeDTO) {
    return this.reviewLikeService.createReviewLike(createReviewLikeDTO);
  }

  @Put(':id')
  @ApiTags('Reviews')
  updateReviewLike(@Param('id') id: number, @Body('like') like: boolean) {
    return this.reviewLikeService.updateReviewLike(id, like);
  }

  @Delete(':id')
  @ApiTags('Reviews')
  deleteReviewLike(@Param('id') id: number) {
    return this.reviewLikeService.deleteReviewLike(id);
  }

  @Get(':id')
  @ApiTags('Reviews')
  findReviewLikeById(@Param('id') id: number) {
    return this.reviewLikeService.findReviewLikeById(id);
  }

  @Get()
  @ApiTags('Reviews')
  findAllReviewLikes() {
    return this.reviewLikeService.findAllReviewLikes();
  }
}
