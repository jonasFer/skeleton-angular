import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [HomeComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    CoreModule
  ]
})
export class AdminModule { }
