import { Component, signal } from '@angular/core';
import { TuiCarousel, TuiPagination } from '@taiga-ui/kit';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [TuiPagination, TuiCarousel],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  images = signal<string[]>([]);
  titles = signal<string[]>([]);
  texts = signal<string[]>([]);
  index = signal(0);

  get metodologia() {
    return this.datosService.metodologia;
  }

  constructor(private datosService: DatosService) {}

  ngOnInit() {
    const images: string[] = [];
    const titles: string[] = [];
    const texts: string[] = [];

    for (let i = 0; i < this.metodologia.length; i++) {
      images.push(this.metodologia[i].image);
      titles.push(this.metodologia[i].title);
      texts.push(this.metodologia[i].informacion);
    }

    this.images.set(images);
    this.titles.set(titles);
    this.texts.set(texts);
  }
  getShortText(text: string): string {
    const words = text.split(' ');
    return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : text + ' ...';
  }
}
