import { Component } from '@angular/core';
import { ConcertsHeroComponent } from "./concerts-hero/concerts-hero.component";
import { ConcertsFiltersComponent } from "./concerts-filters/concerts-filters.component";
import { ConcertsGridComponent } from "./concerts-grid/concerts-grid.component";

@Component({
  selector: 'app-concerts',
  standalone: true,
  imports: [ConcertsHeroComponent, ConcertsFiltersComponent, ConcertsGridComponent],
  templateUrl: './concerts.component.html',
  styleUrl: './concerts.component.css'
})
export class ConcertsComponent {

}
