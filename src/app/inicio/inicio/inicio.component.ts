import { Component, HostListener } from '@angular/core';

import { AvisoComponent } from '../aviso/aviso.component';
import { InformacionComponent } from '../informacion/informacion.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [AvisoComponent, InformacionComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  ngAfterViewInit() {
    const video = document.querySelector('video');

    if (video) {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;

      var playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            video.play();
          })
          .catch((error) => {
            console.error('Error al intentar reproducir el video:', error);
          });
      }
    }
  }

  constructor(private viewportScroller: ViewportScroller) {}

  ScrollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
