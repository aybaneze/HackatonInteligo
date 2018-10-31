import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgxWebstorageModule} from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { CuestionarioService } from './components/services/cuestionario.service';

@NgModule({
  declarations: [
    AppComponent,
    CuestionarioComponent
  ],
  imports: [
    NgxWebstorageModule.forRoot(),
    FormsModule,
    BrowserModule,
    NgbModule
  ],
  providers: [
    CuestionarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
