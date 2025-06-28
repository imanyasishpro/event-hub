import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConcertModel } from './concert.model';

@Component({
  selector: 'app-concerts-concert',
  standalone: true,
  imports: [],
  templateUrl: './concerts-concert.component.html',
  styleUrl: './concerts-concert.component.css'
})
export class ConcertsConcertComponent {

  @Input ({required: true}) concert!: ConcertModel;
  @Output() selected = new EventEmitter<string>();

  concertSelected(id: string) {
    this.selected.emit(id)
  }


  buy() {
    console.log("buy");
  }
}
