import { RouterModule, Routes } from '@angular/router';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { VistaDonasComponent } from './components/vista-donas/vista-donas.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const APP_ROUTES: Routes = [
  { path: '', component: CuestionarioComponent },
  { path: 'mi-perfil', component: VistaDonasComponent },
  { path: 'registro', component: UsuarioComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
