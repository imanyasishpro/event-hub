import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConcertModel } from '../concerts-concert/concert.model';
import { ConcertsService } from '../concerts.service';

@Component({
  selector: 'app-view-concert',
  standalone: true,
  imports: [],
  templateUrl: './view-concert.component.html',
  styleUrl: './view-concert.component.css'
})
export class ViewConcertComponent {
  @Input({required: true}) concert?: ConcertModel;
  @Output() deletedConcertId = new EventEmitter<string>();

  constructor(private concertsService: ConcertsService) {}

  deleteConcert(id?:string ) {
    this.concertsService.deleteConcert(id);
  }
}
