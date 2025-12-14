import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('Auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('VerifyUserLoginCredentials')
  verifyUserLoginCredentials(@Request() req) {
    return this.authService.login(req.user);
  }
}
