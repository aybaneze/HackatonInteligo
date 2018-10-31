import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// IMPORTANDO PAQUETE PARA PDF
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { Ng2Webstorage } from 'ngx-webstorage';
/* ngx-webstorage */

// graficos
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { CuestionarioService } from './components/services/cuestionario.service';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioService } from './services/usuario.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';


import { CorreoComponent } from './components/correo/correo.component';


import { APP_ROUTING } from './app.routes';
import { VistaDonasComponent } from './components/vista-donas/vista-donas.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    CuestionarioComponent,
    GraficoDonaComponent,
    UsuarioComponent,
    VistaDonasComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    Ng2Webstorage,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    UsuarioService,
    CuestionarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
