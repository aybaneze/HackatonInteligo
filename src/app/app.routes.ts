import { RouterModule, Routes } from '@angular/router';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';

const APP_ROUTES: Routes = [
  { path: '', component: CuestionarioComponent },
  { path: 'mi-perfil', component: GraficoDonaComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
