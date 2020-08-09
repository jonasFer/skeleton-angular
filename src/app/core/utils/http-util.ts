import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

export class HttpUtil {
    public static tratarErro(erro: HttpErrorResponse): Observable<any> {
        let erroMessage: string;

        try {
            erroMessage = String(erro.error);
        } catch (e) {
            erroMessage = 'Ocorreu um erro';
        }

        return throwError(new Error(erroMessage));
    }
}
