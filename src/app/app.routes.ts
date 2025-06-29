import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { ViewConcertComponent } from './concerts/concerts-grid/view-concert/view-concert.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'concerts',
        component: ConcertsComponent
    },
    {
        path: 'concerts/:concertId',
        component: ViewConcertComponent
    }
];
