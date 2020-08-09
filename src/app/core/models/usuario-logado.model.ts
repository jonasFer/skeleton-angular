import { UsuarioLogadoInterface } from '../interfaces/usuario.logado.interface';

export class UsuarioLogado implements UsuarioLogadoInterface {
    email: string;
    nome: string;
    foto: string;
}
