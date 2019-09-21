import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { LoginComponent } from '../components/login/login.component';

    export const routes: Routes = [
        
        {
            path: 'login',
            component: LoginComponent,
        },
        {
            path: 'main',
            component: MainPageComponent,
        },
        {   path: '',
            redirectTo: '/login',
            pathMatch: 'full'
        },
        { path: '**', redirectTo: '/login' }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
