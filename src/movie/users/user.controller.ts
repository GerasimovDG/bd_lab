import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user.interface';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.getAllUsers();
    }
    @Get('/:login')
    async findUser(@Param('login') login: string): Promise<User> {
        return this.userService.findByLogin(login);
    }
    @Get('/:login/:password')
    async login(@Param('login') login: string, @Param('password') password: string): Promise<User> {
        const user: User = { login, password};
        return this.userService.login(user);
    }

    @Post()
    async create(@Body() user: User): Promise<boolean> {
        if (this.userService.findByLogin(user.login)) {
           return false;
        }
        return this.userService.register(user);
    }
}
