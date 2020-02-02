import {Injectable} from '@nestjs/common';
import {User} from './user.interface';

@Injectable()
export class UserService {
    private users: User[] = [
        {
            login: 'admin',
            password: 'admin1',
        },
        {
            login: 'Baget',
            password: '123456',
        },
        {
            login: 'BigBro1991',
            password: 'Qwerty123',
        },
        {
            login: 'test',
            password: 'test111',
        },
    ];

    getAllUsers(): User[] {
        return this.users;
    }

    login(user: User): boolean {
        return !!this.users.find( item =>  item.login === user.login && item.password === user.password);
    }
}
