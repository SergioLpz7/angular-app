import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-error',
  standalone: true,
  imports: [],
  template: `
  <h1>Error 404</h1>
  <p>Este link no existe, por favor refirijase a: <a href="/inicio/inicio">Inicio</a></p>`,
  styles: ``
})
export class PaginaErrorComponent {

}
