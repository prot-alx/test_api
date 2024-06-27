import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly ConfigService: ConfigService,
    ) {}

    async generateJwtToken(user: any) {
        const payload = { user };
        return this.jwtService.sign(payload, {
            secret: this.ConfigService.get('SECRET_JWT'),
            expiresIn: this.ConfigService.get('EXPIRE_JWT'),
        });
    }

}
