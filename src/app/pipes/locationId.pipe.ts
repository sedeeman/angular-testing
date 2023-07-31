import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interface/user';

@Pipe({
    name: 'locationId',
    standalone: true,
})
export class LocationIdPipe implements PipeTransform {
    transform(users: User[] | null, ...ids: number[]): User[] | null {
        if (users == null || users?.length == 0) {
            return users;
        }
        return users.filter((user) => ids.some((id) => id == user.locationId));
    }
}
