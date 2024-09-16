import { Component } from '@angular/core';
import { DatosService } from '../../service/datos.service';

@Component({
  selector: 'app-metodologia',
  standalone: true,
  imports: [],
  templateUrl: './metodologia.component.html',
  styleUrl: './metodologia.component.css'
})
export class MetodologiaComponent {


  get metodologia (){
    return this.datosService.metodologia
  }

  constructor (private datosService : DatosService) {}
}
