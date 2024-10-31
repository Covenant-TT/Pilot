import { Routes } from '@angular/router';
import { LandingComponent } from './components/pages/landing/landing.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LoginComponent } from './components/auth/login/login.component';



export const routes: Routes = [
    {path: 'landing', component: LandingComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}

];
