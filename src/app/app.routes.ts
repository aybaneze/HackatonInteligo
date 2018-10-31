import { RouterModule, Routes } from '@angular/router';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { VistaDonasComponent } from './components/vista-donas/vista-donas.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  {path:'', component:HomeComponent}
{ path: 'conociendo-mi-perfil', component: CuestionarioComponent },
  { path: 'mi-perfil', component: VistaDonasComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
