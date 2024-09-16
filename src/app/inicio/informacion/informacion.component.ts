import { Component } from '@angular/core';
import { CarouselComponent } from '../../carousel/carousel.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css',
})
export class InformacionComponent {
  constructor(private router: Router) {}
  goTo() {
    this.router.navigate(['/escuela/metodologia'])
  }
}
