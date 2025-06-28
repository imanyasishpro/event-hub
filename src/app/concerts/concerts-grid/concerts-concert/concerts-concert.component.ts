import { Component, Input } from '@angular/core';
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
  
}
