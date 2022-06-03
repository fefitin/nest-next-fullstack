import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller()
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string }
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('users')
  async users(): Promise<UserModel[]> {
    return this.userService.users({});
  }
}
