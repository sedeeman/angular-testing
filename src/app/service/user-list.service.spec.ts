import { UserListService } from './user-list.service';

describe('User List Service', () => {
    let service: UserListService;

    beforeEach(() => {
        service = new UserListService();
    });

    it('Should return a list with 16 users', (done: DoneFn) => {
        service.getAll().then((res) => {
            expect(res.length).toBe(16);
            done();
        });
    }, 5000);
});
