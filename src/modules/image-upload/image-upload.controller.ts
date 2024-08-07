import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageUploadService } from './image-upload.service';

@Controller('image-upload')
export class ImageUploadController {
  constructor(private readonly imageUploadService: ImageUploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ imageUrl: string }> {
    const imageUrl = await this.imageUploadService.uploadImage(file);
    console.log({ imageUrl });
    return { imageUrl };
  }
}

//curl -X POST http://localhost:3000/image-upload -F "file=@\"E:/imgs/1.jpg\""
