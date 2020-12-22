import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieUser } from './user.entity';
import { Repository } from 'typeorm';
import { UserInterface } from './user.interface';

export interface User {
  name?: string;
  login: string;
  password: string;
}

@Injectable()
export class UsersService {

  constructor(@InjectRepository(MovieUser) private usersRepository: Repository<MovieUser>) {
  }

  async getUsers(): Promise<MovieUser[]> {
    return await this.usersRepository.find();
  }

  // tslint:disable-next-line:variable-name
  // async getUser(_id: string): Promise<Users[]> {
  //   return await this.usersRepository.find({
  //     select: ['fullName', 'birthday', 'isActive'],
  //     where: [{ id: _id }],
  //   });
  // }
  async getUser(id: string): Promise<MovieUser> {
    return await this.usersRepository.findOne(id);
  }
  async findByLogin(login: string): Promise<MovieUser> {
    const user = await this.usersRepository.findOne({login});

    if (user?.login && user?.password) {
      return user;
    }
    return undefined;
    // throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
  async login(user: UserInterface): Promise<MovieUser> {
    const servUser = await this.usersRepository.findOne({login: user.login});
    Logger.log(servUser);
    Logger.log(servUser.login === user.login && servUser.password === user.password);
    if (servUser.login === user.login && servUser.password === user.password) {
      return servUser;
    }
    return undefined;
    // throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async updateUser(id: string, user: MovieUser) {
    // this.usersRepository.save(user);
    await this.usersRepository.update(id, user);
    const updatedCat = await this.usersRepository.findOne(id);
    if (updatedCat) {
      return updatedCat;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  async deleteUser(userId: string) {
    // this.usersRepository.delete(user);

    const deleteResponse = await this.usersRepository.delete(userId);
    if (!deleteResponse.affected) {
      throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);
    }
  }

  async createUser(user: MovieUser) {
    const newUser = await this.usersRepository.create(user);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async register(user: MovieUser) {
    const isUserExist = await this.findByLogin(user.login);
    if (isUserExist) {
      return false;
    } else {
      const newUser = await this.createUser(user);
      Logger.log(newUser);
      return true;
    }
  }
}
