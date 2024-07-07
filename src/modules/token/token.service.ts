import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateJwtToken(user: any) {
    const payload = { email: user.email, role: user.role };
    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>('SECRET_JWT'),
      expiresIn: this.configService.get<string | number>('EXPIRE_JWT'),
    });
  }
}
