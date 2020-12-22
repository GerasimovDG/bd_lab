import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieActorr } from './actors.entity';
import { ActorsService } from './actors.service';
import { ActorsController } from './actors.controllel';

@Module({
  imports: [TypeOrmModule.forFeature([MovieActorr])],
  providers: [ActorsService],
  controllers: [ActorsController],
})
export class ActorsModule {}
