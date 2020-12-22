import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieUser } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieUser])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
