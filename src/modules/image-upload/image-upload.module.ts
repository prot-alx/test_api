import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ImageUploadService } from './image-upload.service';
import { ImageUploadController } from './image-upload.controller';

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ImageUploadModule],
      useFactory: (imageUploadService: ImageUploadService) => ({
        storage: imageUploadService.getMulterStorage(),
      }),
      inject: [ImageUploadService],
    }),
  ],
  providers: [ImageUploadService],
  controllers: [ImageUploadController],
  exports: [ImageUploadService, MulterModule],
})
export class ImageUploadModule {}
