import { Routes } from '@angular/router';
import { loggedGuard } from './core/guards/logged.guard';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'registro',
        component: RegistroComponent 
    },
    { 
        path: 'login',
        component: LoginComponent 
    },
    {
        path: 'admin', 
        component: LayoutComponent, 
        children: 
        [
            { 
                path: 'dashboard',
                component: DashboardComponent 
            },
            { 
                path: '',
                component: MainComponent 
            }           
        ]
    }

];
