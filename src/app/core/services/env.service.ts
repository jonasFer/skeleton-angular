import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class EnvService {
    public get api(): string {
        return environment.uri.api;
    }

    public get projeto(): string {
        return environment.uri.projeto;
    }
}
