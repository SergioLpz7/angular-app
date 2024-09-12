import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';

export const routes: Routes = [
  { path: 'inicio/inicio', component: InicioComponent, title: "LittleRainbow"},
  { path: '', redirectTo: '/inicio/inicio', pathMatch: 'full' },
  { path: 'contacto', component: ContactoComponent},
  { path: '**', component: PaginaErrorComponent}
];
 