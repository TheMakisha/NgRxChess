import { Body, Controller, Get, HttpException, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto, UserService } from './user.service';
import { QueryFailedError } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

//TODO: dodati globalni exception handler, dodati autentifikaciju
@Controller('User')
export class UserController {

  constructor(
    private userService: UserService
  ) {
    
  }

  @Post('CreateUser')
  async signUpUser(@Body() userInfo: CreateUserDto) {
    try {
      await this.userService.createUser(userInfo);
    }
    catch (error) {
      if (error instanceof QueryFailedError) {
        console.log(error.message);
        if (error.message.includes("Duplicate entry")) {
          throw new HttpException("username already exists", HttpStatus.CONFLICT);
        }
        else throw error;
      }
      else throw error;
    }
    
  }
}
