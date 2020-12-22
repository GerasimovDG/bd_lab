import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieGenre } from './genres.entity';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MovieGenre])],
  providers: [GenresService],
  controllers: [GenresController],
})
export class GenresModule {}
