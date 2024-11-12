import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { ContactComponent } from './pages/contact/contact.component'
import { LegendsComponent } from './pages/legends/legends.component'

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'legends', component: LegendsComponent},
];
