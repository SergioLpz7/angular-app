import { Component } from '@angular/core';
import { DatosService } from '../../service/datos.service';

@Component({
  selector: 'app-aviso',
  standalone: true,
  imports: [],
  templateUrl: './aviso.component.html',
  styleUrl: './aviso.component.css'
})
export class AvisoComponent {

  get datos (){
    return this.datosService.datos
  }

  constructor(private datosService: DatosService){}

}
