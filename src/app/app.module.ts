import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//graficos
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoDonaComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
