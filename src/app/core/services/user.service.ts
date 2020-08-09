import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { UsuarioLogadoInterface } from '../interfaces/usuario.logado.interface';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private $user: Observable<any>;
    private $setUserInfo: Subject<UsuarioLogadoInterface>;

    constructor(private http: HttpClient) {
        this.$setUserInfo = new Subject();
        this.$user = this.$setUserInfo.asObservable();
    }

    public getUser(): Observable<any> {
        const url =
            'https://run.mocky.io/v3/05e9b121-f81c-4055-8fca-3b9cebcc931e';

        return this.http
            .get<UsuarioLogadoInterface>(url, {
                withCredentials: false,
                responseType: 'json',
            })
            .pipe();
    }

    public getUserInfo(): Observable<UsuarioLogadoInterface> {
        return this.$user;
    }
}
