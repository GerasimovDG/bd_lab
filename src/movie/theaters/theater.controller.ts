import { Controller, Get } from '@nestjs/common';
import { TheaterService } from './theater.service';
import { Theater } from './theater.interface';

@Controller('theaters')
export class TheaterController {
  constructor(private theaterService: TheaterService) {
  }

  @Get()
  async findAll(): Promise<Theater[]> {
    return this.theaterService.findAll();
  }
}
