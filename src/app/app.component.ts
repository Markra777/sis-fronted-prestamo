import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet,LoginComponent,LayoutComponent,RouterLink]
})
export class AppComponent {
  title = 'sis-frontend-prestamo';
}
