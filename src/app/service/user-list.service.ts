import { Injectable } from '@angular/core';
import { USERS } from '../mock/users';
import { User } from '../interface/user';

@Injectable({
    providedIn: 'root',
})
export class UserListService {
    public async getAll(): Promise<User[]> {
        return USERS;
    }

    public async filter(text: string): Promise<User[]> {
        return USERS.filter((user) =>
            user.name.toLowerCase().includes(text.toLowerCase())
        );
    }
}
