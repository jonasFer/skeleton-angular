import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../../core/core.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnimalModule } from './animal/animal.module';

@NgModule({
    declarations: [HomeComponent, AdminComponent, PageNotFoundComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        RouterModule,
        CoreModule,
        AnimalModule,
    ],
})
export class AdminModule {}
