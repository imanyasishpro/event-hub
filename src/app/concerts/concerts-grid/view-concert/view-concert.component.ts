import { Component, EventEmitter, inject, input, Input, OnInit, Output } from '@angular/core';
import { ConcertModel } from '../concerts-concert/concert.model';
import { ConcertsService } from '../concerts.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-concert',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-concert.component.html',
  styleUrl: './view-concert.component.css'
})
export class ViewConcertComponent implements OnInit{

  @Input({required: true}) concertId!: string;
  private concertService = inject(ConcertsService);
  private activatedRoute = inject(ActivatedRoute);
  theConcert?: ConcertModel;

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.theConcert = this.concertService.getConcert(this.concertId);
    console.log(this.theConcert)
  }
  @Output() deletedConcertId = new EventEmitter<string>();


  deleteConcert(id?:string ) {
    this.concertService.deleteConcert(id);
  }
}
