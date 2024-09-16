import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { OfrecemosComponent } from './ofrecemos/ofrecemos.component';
import { InstalacionesComponent } from './escuela/instalaciones/instalaciones.component';
import { MetodologiaComponent } from './escuela/metodologia/metodologia.component';
import { CarouselComponent } from './carousel/carousel.component';

export const routes: Routes = [
  { path: 'inicio/inicio', component: InicioComponent, title: "LittleRainbow"},
  { path: '', redirectTo: '/inicio/inicio', pathMatch: 'full' },
  { path: 'contacto', component: ContactoComponent},
  { path: 'ofrecemos', component: OfrecemosComponent},
  { path: 'escuela/instalaciones', component: InstalacionesComponent},
  { path: 'escuela/metodologia', component:MetodologiaComponent },
  { path: '**', component: PaginaErrorComponent}
];
 