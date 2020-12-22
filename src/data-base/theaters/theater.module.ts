import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieTheater } from './theater.entity';
import { TheaterService } from './theater.service';
import { TheaterController } from './theater.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MovieTheater])],
  providers: [TheaterService],
  controllers: [TheaterController],
})
export class TheaterModule {}
