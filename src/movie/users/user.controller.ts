import { Body, Controller, Get, Post } from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user.interface';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Post()
    async create(@Body() user: User): Promise<boolean> {
        return this.userService.login(user);
    }
}
