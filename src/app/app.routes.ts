import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConcertsComponent } from './concerts/concerts.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'concerts',
        component: ConcertsComponent
    }
];
