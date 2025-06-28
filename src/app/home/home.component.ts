import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { CategoriesComponent } from "./categories/categories.component";
import { FeaturedEventsComponent } from "./featured-events/featured-events.component";
import { CtaComponent } from "./cta/cta.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CategoriesComponent, FeaturedEventsComponent, CtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
