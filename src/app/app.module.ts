import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HeaderModule } from './core/components/header/header.module';
import { SidebarModule } from './core/components/sidebar/sidebar.module';
import { FooterModule } from './core/components/footer/footer.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        HeaderModule,
        SidebarModule,
        FooterModule,
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent],
})
export class AppModule {}
