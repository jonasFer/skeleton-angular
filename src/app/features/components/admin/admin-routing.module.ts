import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EspecieComponent } from './animal/especie/especie.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'especie', component: EspecieComponent },
            { path: '**', component: PageNotFoundComponent },
        ],
    },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AdminRoutingModule {}