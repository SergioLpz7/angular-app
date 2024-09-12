import { Component } from '@angular/core';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  get datos (){
    return this.datosService.datos
  }

  constructor (
    private datosService: DatosService
  ){}
}
