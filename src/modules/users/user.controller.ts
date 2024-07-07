import {
  Controller,
  Body,
  Get,
  Delete,
  Patch,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, UpdateUserDTO } from './dto';
import { User } from './models/user.model';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/guards/roles.decorator';

@Controller('profile')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //GET ALL PROFILES via admin only
  @ApiTags('Profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('all')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  //GET PROFILE
  @ApiTags('Profile')
  @ApiResponse({ status: 200, type: CreateUserDTO })
  @UseGuards(JwtAuthGuard)
  @Get()
  getUser(@Req() request: any) {
    const user = request.user;
    return this.userService.publicUser(user.email);
  }

  //UPDATE PROFILE
  @ApiTags('Profile')
  @ApiResponse({ status: 200, type: UpdateUserDTO })
  @UseGuards(JwtAuthGuard)
  @Patch()
  updateUser(
    @Body() updateDTO: UpdateUserDTO,
    @Req() request: any,
  ): Promise<UpdateUserDTO> {
    const user = request.user;
    return this.userService.updateUser(user.email, updateDTO);
  }

  //DELETE PROFILE
  @ApiTags('Profile')
  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteUser(@Req() request: any): Promise<boolean> {
    const user = request.user;
    return this.userService.deleteUser(user.email);
  }
}
