/* eslint-disable import/no-unresolved */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class WebStorageService {
    constructor(private http: HttpClient) {}

    public get(key: string): string | null {
        return window.localStorage.getItem(key);
    }

    public set(key: string, value: string): void {
        window.localStorage.setItem(key, value);
    }

    public getRemote(): Observable<string> {
        return this.http.get<string>('/mock/api/filter');
    }

    public setRemote(payload: string): Observable<string> {
        return this.http.put<string>('/mock/api/filter', payload);
    }
}
