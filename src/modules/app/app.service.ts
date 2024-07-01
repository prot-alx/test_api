import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStarted(): string {
    return 'APP STARTED!';
  }
}
