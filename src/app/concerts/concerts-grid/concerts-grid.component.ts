import { Component } from '@angular/core';
import { ConcertsConcertComponent } from "./concerts-concert/concerts-concert.component";
import { concerts } from '../../conserts';
import { AddConcertComponent } from './add-concert/add-concert.component';

@Component({
  selector: 'app-concerts-grid',
  standalone: true,
  imports: [ConcertsConcertComponent,AddConcertComponent],
  templateUrl: './concerts-grid.component.html',
  styleUrl: './concerts-grid.component.css'
})
export class ConcertsGridComponent {
  concerts = concerts;
  concertId: any;
  isAddConcert: boolean = false;
}
