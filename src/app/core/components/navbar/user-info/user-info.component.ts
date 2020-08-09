import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/core/services';
import { UsuarioLogado } from '../../../models/usuario-logado.model';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
    public user: any;
    private _userService: UserService;
    constructor(userService: UserService) {
        this._userService = userService;
    }

    ngOnInit(): void {
        this.user = new UsuarioLogado();
        this.getUserInfo();
    }

    public getUserInfo(): void {
        this._userService.getUser().subscribe(
            (data) => {
                this.user = data;
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
