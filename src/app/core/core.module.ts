import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  bootstrap: []
})
export class CoreModule { }
