import { Component, OnInit } from '@angular/core';
import { CloudComponent } from '../../cloud/cloud.component';
import { GaleriaService } from '../../service/galeria.service';

@Component({
  selector: 'app-instalaciones',
  standalone: true,
  imports: [],
  templateUrl: './instalaciones.component.html',
  styleUrl: './instalaciones.component.css',
})
export class InstalacionesComponent implements OnInit {
  img: string[] = [];

  grupoImg: string[][] = [];

  constructor(private galeriaService: GaleriaService) {}

  ngOnInit(): void {
    this.img = this.galeriaService.getImagenes();

    for (let i = 0; i < this.img.length; i += 8) {
      this.grupoImg.push(this.img.slice(i, i + 8));

    }
    
  }
}
