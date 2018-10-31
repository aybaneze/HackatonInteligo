import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VistaDonasComponent } from './components/vista-donas/vista-donas.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaDonasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
