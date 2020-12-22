import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { MovieUser } from './user.entity';
import { User } from '../../movie/users/user.interface';
import { UserInterface } from './user.interface';

@Controller('userss')
export class UsersController {

  constructor(private service: UsersService) { }

  @Get()
  async findAll(): Promise<MovieUser[]> {
    return this.service.getUsers();
  }

  @Get(':id/id')
  async get(@Param() params) {
    Logger.log(params);
    return this.service.getUser(params.id);
  }
  @Get('/:login')
  async findUserByLogin(@Param('login') login: string): Promise<User> {
    Logger.log(login);
    return this.service.findByLogin(login);
  }

  @Get('/:login/:password')
  async login(@Param('login') login: string, @Param('password') password: string): Promise<MovieUser> {
    Logger.log(password);
    const user: UserInterface = { login, password};
    return this.service.login(user);
  }

  @Post()
  async create(@Body() user: MovieUser): Promise<boolean> {
    return this.service.register(user);
  }

  @Put(':id')
  update(@Body() user: MovieUser, @Param('id') id: string) {
    return this.service.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }

}
