import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgxWebstorageModule} from 'ngx-webstorage';

//graficos
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


@NgModule({
  declarations: [
    AppComponent,
    CuestionarioComponent,
    GraficoDonaComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    NgbModule

  ],
  providers: [
    UsuarioService,
    CuestionarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
