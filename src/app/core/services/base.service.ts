import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from '@angular/common/http';
import { UrlUtilService } from './url-util.service';
import { Observable } from 'rxjs';
import { take, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class BaseService {
    private _baseUrl: string;
    private _msgDefault: string;
    constructor(
        baseUrl: string = null,
        protected http: HttpClient,
        private options: any,
        private urlUtilService: UrlUtilService
    ) {
        this._baseUrl = baseUrl;
        this._msgDefault = 'Por favor tente novamente.';
        this.options = {
            withCredentials: false,
            responseType: 'json',
            headers: new HttpHeaders({
                'content-Type':
                    'application/x-www-form-urlencoded; charset=UTF-8',
            }),
        };
    }

    get baseUrl(): string {
        return this._baseUrl;
    }

    get = (url?: string, params?: any): Observable<any> => {
        return this.sendRequest(this.getUrl(url), 'get', params).pipe(
            take(1),
            catchError((erro: HttpErrorResponse) => void console.log('Erro'))
        );
    };

    sendRequest = (
        url: string,
        type: string,
        params?: Record<string, string>,
        body?: any
    ): Observable<any> => {
        return this.http.request(type, url, this.options);
    };

    public getUrl(url: string): string {
        return this.urlUtilService.montarUrlApi(`${this._baseUrl}${url}`);
    }
}
