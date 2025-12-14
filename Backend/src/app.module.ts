import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PubsubGateway } from './pubsub/pubsub.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Rokopudla123@',
    database: 'test',
    entities: [User],
    synchronize: true
  }), AuthModule],
  controllers: [AppController],
  providers: [AppService, PubsubGateway],
})
export class AppModule {}
