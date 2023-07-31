/* eslint-disable import/no-unresolved */
import { WebStorageService } from '../service/web-storage.service';
import { UserListComponent } from './user-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [UserListComponent],
            providers: [
                {
                    provide: WebStorageService,
                    useValue: jasmine.createSpyObj('WebStorageService', [
                        'getRemote',
                        'setRemote',
                    ]),
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
