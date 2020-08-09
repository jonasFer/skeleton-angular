import { Injectable } from '@angular/core';
import { EnvService } from './env.service';

@Injectable({
    providedIn: 'root',
})
export class UrlUtilService {
    constructor(private env: EnvService) {}

    public getUrlApi(): string {
        return `${this.env.api}`;
    }

    public montarUrl(rota: string) {
        return `${this.env.api}${rota}`;
    }

    public montarUrlApi(
        resource: string,
        parameters?: Record<string, string>
    ): string {
        const queryString = parameters
            ? this.objectToQueryString(parameters)
            : '';

        return this.getUrlApi() + resource + queryString;
    }

    private objectToQueryString(parameters: Record<string, string>): string {
        const arrayParametro = [];

        for (const property of Object.keys(parameters)) {
            if (
                parameters[property] != null &&
                parameters[property] != 'undefined'
            ) {
                arrayParametro.push(`${property}=${parameters[property]}`);
            }
        }

        return `?${arrayParametro.join('&')}`;
    }
}
