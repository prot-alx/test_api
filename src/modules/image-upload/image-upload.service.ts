import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

@Injectable()
export class ImageUploadService {
  getMulterStorage() {
    return diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const filename: string = uuidv4();
        const extension: string = path.extname(file.originalname);
        cb(null, `${filename}${extension}`);
      },
    });
  }

  async uploadImage(file: Express.Multer.File): Promise<string> {
    if (!file) {
      return null;
    }
    console.log('uploadImage service', file, file.path);
    return file.path;
  }
}
