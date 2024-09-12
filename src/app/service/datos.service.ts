import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private _datos = {
    numero: "626 60 69 01", 
    email: "tamaraguillen@eiblittlerainbows.es",
    lugar: "Calle rio jarama, 50 Navalcarnero",
    horario: "De 6:30 a 19:00 de lunes a viernes",
    instagram: "https://www.instagram.com/eib.littlerainbows/",
    tiktok: "https://www.tiktok.com/@eib.little.rainbo?_t=8pYD0B4b7aK&_r=1",
    facebook: "/"
  }

  get datos(){
    return{...this._datos}
  }

  constructor() { }
}
