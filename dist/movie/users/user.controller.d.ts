import { UserService } from './user.service';
import { User } from './user.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findUser(login: string): Promise<User>;
    login(login: string, password: string): Promise<User>;
    create(user: User): Promise<boolean>;
}
