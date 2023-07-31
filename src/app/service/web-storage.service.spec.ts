/* eslint-disable import/no-unresolved */
import { TestBed } from '@angular/core/testing';
import { WebStorageService } from './web-storage.service';
import { HttpClient } from '@angular/common/http';

describe('WebStorageService', () => {
    let service: WebStorageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', [ 'get', 'put' ]) }
            ]
        });
        service = TestBed.inject(WebStorageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
