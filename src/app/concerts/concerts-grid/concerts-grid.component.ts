import { Component } from '@angular/core';
import { ConcertsConcertComponent } from "./concerts-concert/concerts-concert.component";
import { concerts } from '../../conserts';
import { AddConcertComponent } from './add-concert/add-concert.component';
import { ConcertModel } from './concerts-concert/concert.model';
import { ViewConcertComponent } from './view-concert/view-concert.component';

@Component({
  selector: 'app-concerts-grid',
  standalone: true,
  imports: [ConcertsConcertComponent,AddConcertComponent, ViewConcertComponent],
  templateUrl: './concerts-grid.component.html',
  styleUrl: './concerts-grid.component.css'
})
export class ConcertsGridComponent {
  concerts = concerts;
  concertId: any;
  isAddConcert: boolean = false;
  isSelectedConcert: boolean = false;
  selectedConcertId!:string ;
  theSelectedConcert?:ConcertModel ;

  selectedConcert(id:string) {
    this.selectedConcertId = id;
    this.isSelectedConcert = true;
    this.theSelectedConcert = this.concerts.find((concert) => concert.concertId === id);
    console.log(this.theSelectedConcert);
  }
}
