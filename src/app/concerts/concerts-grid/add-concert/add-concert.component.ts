import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConcertsService } from '../concerts.service';
import { NewConcertModel } from './new-concert.model';

@Component({
  selector: 'app-add-concert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-concert.component.html',
  styleUrl: './add-concert.component.css'
})
export class AddConcertComponent implements OnInit{
  @Input({required: true}) isAddConcert!: boolean;
  @Output() cancelAdding = new EventEmitter<boolean>();

  newConcert: NewConcertModel = {
    concertTitle: '',
    artistName: '',
    date: '',
    location: '',
    ticketPrice: '',
    avalableTickets: 0,
    imageUrl: '',
    description: ''
  }

  constructor(private concertsService: ConcertsService) {}

  ngOnInit(): void {
    if(this.isAddConcert) {
      document.getElementById('add-concert-modal')?.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  cancel() {
    this.cancelAdding.emit();
    document.body.style.overflow = '';
  }

  onSubmit() {
    this.concertsService.addConcert(this.newConcert);
    this.cancel();
  }
}
