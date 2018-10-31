import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//graficos
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioService } from './services/usuario.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GraficoDonaComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
