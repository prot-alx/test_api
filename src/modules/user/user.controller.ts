import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('all')
    getUsers() {
        return this.userService.getUsers();
    }
}
