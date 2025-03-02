import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GaleriaService {
  constructor() {}

  getImagenes(): string[] {
    let imagenes: string[] = [];
    for (let i = 1; i <= 30; i++) {
      imagenes.push(`/galeria/img${i}.jpg`);
    }

    return imagenes;
  }
}
