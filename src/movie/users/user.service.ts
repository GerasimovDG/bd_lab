import {Injectable} from '@nestjs/common';
import {User} from './user.interface';

@Injectable()
export class UserService {
    private users: User[] = [
        {
            name: 'Админ',
            login: 'admin',
            password: 'admin1',
        },
        {
            name: 'Дмитрий',
            login: 'Baget',
            password: '123456',
        },
        {
            name: 'Алексей',
            login: 'BigBro1991',
            password: 'Qwerty123',
        },
        {
            name: 'Тестовый пользователь',
            login: 'test',
            password: 'test111',
        },
    ];

    getAllUsers(): User[] {
        return this.users;
    }

    login(user: User): User {
        return this.users.find( item =>  item.login === user.login && item.password === user.password);
    }
    findByLogin(login: string): User {
        return this.users.find( item =>  item.login.toString() === login);
    }

    register(user: User): boolean {
        this.users.push(user);
        return true;
    }
}
