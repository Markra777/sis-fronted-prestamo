import { Routes } from "@angular/router";
import { RegistroComponent } from "./registro/registro.component";
import { LoginComponent } from "./login/login.component";

export const AUTH_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'registro', component: RegistroComponent }
    
];