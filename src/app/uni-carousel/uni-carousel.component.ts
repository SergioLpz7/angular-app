import { Component, signal } from '@angular/core';
import { TuiCarousel, TuiPagination } from '@taiga-ui/kit';

@Component({
    selector: 'app-uni-carousel',
    imports: [TuiCarousel, TuiPagination],
    templateUrl: './uni-carousel.component.html',
    styleUrl: './uni-carousel.component.css'
})
export class UniCarouselComponent {
  index = signal(2);
  images = signal([
    "uniforme1.jpg",
    "uniforme3.jpg",
    "uniforme2.jpg"
  ]);
}
