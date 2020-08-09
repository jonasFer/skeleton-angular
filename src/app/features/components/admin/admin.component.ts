import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        /** @TODO arrumar forma melhor de fazer isso */
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('hold-transition');
        body.classList.add('skin-blue');
        body.classList.add('sidebar-mini');
    }
}
