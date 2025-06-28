import { Component } from '@angular/core';
import { ConcertsConcertComponent } from "./concerts-concert/concerts-concert.component";
import { AddConcertComponent } from './add-concert/add-concert.component';
import { ConcertModel } from './concerts-concert/concert.model';
import { ViewConcertComponent } from './view-concert/view-concert.component';
import { ConcertsService } from './concerts.service';

@Component({
  selector: 'app-concerts-grid',
  standalone: true,
  imports: [ConcertsConcertComponent,AddConcertComponent, ViewConcertComponent],
  templateUrl: './concerts-grid.component.html',
  styleUrl: './concerts-grid.component.css'
})
export class ConcertsGridComponent {
  concerts = this.concertsService.getConcerts();
  concertId: any;
  isAddConcert: boolean = false;
  isSelectedConcert: boolean = false;
  theSelectedConcert?:ConcertModel ;

  constructor(private concertsService: ConcertsService) {}

  selectedConcert(id:string) {
    this.isSelectedConcert = true;
    this.theSelectedConcert = this.concertsService.getConcert(id);
  }
}
