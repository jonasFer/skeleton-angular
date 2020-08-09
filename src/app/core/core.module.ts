import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { UserService, BaseService } from './services';
import {
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    PageNotFoundComponent,
    UserInfoComponent,
} from './components';
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        FooterComponent,
        SidebarComponent,
        NavbarComponent,
        PageNotFoundComponent,
        UserInfoComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [BaseService, UserService],
    exports: [NavbarComponent, SidebarComponent, FooterComponent],
    bootstrap: [],
})
export class CoreModule {}
