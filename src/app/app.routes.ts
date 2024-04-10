import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MainComponent } from './pages/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'app',
        component: AppComponent
    },
    {
        path: 'layout',
        component: LayoutComponent
    },
    
    {
        path: '**',
        redirectTo: '/login'
    },
    
];
