import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { QueryFailedError, Repository } from 'typeorm';

export interface CreateUserDto {
  email: string;
  username: string;
  password: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {

  }

  async createUser(userInfo: CreateUserDto) {
    await this.userRepository.insert({...userInfo});
  }

  async findUser(username: string) {
    return await this.userRepository.findOne({where: {
      username: username
    }});
  }
}
