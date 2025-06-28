import { Component, Input } from '@angular/core';
import { ConcertModel } from '../concerts-concert/concert.model';

@Component({
  selector: 'app-view-concert',
  standalone: true,
  imports: [],
  templateUrl: './view-concert.component.html',
  styleUrl: './view-concert.component.css'
})
export class ViewConcertComponent {
  @Input({required: true}) concert?: ConcertModel;
}
