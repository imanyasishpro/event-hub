import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-concert',
  standalone: true,
  imports: [],
  templateUrl: './add-concert.component.html',
  styleUrl: './add-concert.component.css'
})
export class AddConcertComponent implements OnInit{
  @Input({required: true}) isAddConcert!: boolean;
  @Output() cancelAdding = new EventEmitter<boolean>();

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
}
