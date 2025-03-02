import { Component, HostListener } from '@angular/core';
import { AvisoComponent } from '../aviso/aviso.component';
import { InformacionComponent } from '../informacion/informacion.component';

@Component({
    selector: 'app-inicio',
    imports: [AvisoComponent, InformacionComponent],
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css'
})
export class InicioComponent {
  ngAfterViewInit() {
    const video = document.querySelector('video');

    if (video && video.autoplay === false) {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;

      var playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Error al intentar reproducir el video:', error);
        });
      }

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          video.play().catch((error) => {
            console.error('Error al intentar reproducir el video:', error);
          });
        }
      });
    }
  }
}
