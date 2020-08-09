import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AdminModule } from './features/components/admin/admin.module';
import {
    HttpClient,
    HttpHandler,
    HttpClientModule,
} from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        CoreModule,
        AppRoutingModule,
        AdminModule,
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent],
})
export class AppModule {}
