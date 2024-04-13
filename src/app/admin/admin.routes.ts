import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from '../pages/main/main.component';

export const ADMIN_ROUTES: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: '', component: MainComponent }
        ]
    }
];