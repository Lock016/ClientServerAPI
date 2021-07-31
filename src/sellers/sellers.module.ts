import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/user.entity';
import { UsersController } from 'src/users/users.controller';
import { SellersService } from './sellers.service';

@Module({
  providers: [SellersService],
  controllers: [
    UsersController
  ],
  imports: [
    TypeOrmModule.forFeature([
      UserEntity
    ])
  ]
})
export class SellersModule {}
