import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';

@Injectable()
export class CatService {

  constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) { }

  async getCats(): Promise<Cat[]> {
    return await this.catRepository.find();
  }

  // tslint:disable-next-line:variable-name
  // async getCat(_id: string): Promise<Cat[]> {
  //   return await this.catRepository.find({
  //     select: ['name', 'breed', 'age'],
  //     where: [{ id: _id }],
  //   });
  // }
  async getCat(id: string): Promise<Cat> {
    return await this.catRepository.findOne(id);
  }

  async updateCat(id: string, cat: Cat) {
    await this.catRepository.update(id, cat);
    const updatedCat = await this.catRepository.findOne(id);
    if (updatedCat) {
      return updatedCat;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    // return this.catRepository.update(id, cat);
  }

  async create(cat: Cat) {
    const newCat = await this.catRepository.create(cat);
    await this.catRepository.save(newCat);
    return newCat;
    // return this.catRepository.save(cat);
  }

  async deleteCat(id: string) {
    // return this.catRepository.delete(id);

    const deleteResponse = await this.catRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);
    }
  }
}
