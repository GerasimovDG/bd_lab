import { User } from './user.interface';
export declare class UserService {
    private users;
    getAllUsers(): User[];
    login(user: User): User;
    findByLogin(login: string): User;
    register(user: User): boolean;
}
