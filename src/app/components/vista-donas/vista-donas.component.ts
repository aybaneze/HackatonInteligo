import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from "ngx-webstorage";

@Component ({
  selector: 'app-vista-donas',
  templateUrl: './vista-donas.component.html',
  styleUrls: ['./vista-donas.component.css']
})
export class VistaDonasComponent implements OnInit {

  profile: string;
  data=[];

  constructor(private _router: Router, private _sesion: SessionStorageService) { }

  ngOnInit() {
    this.profile = this._sesion.retrieve('profile');
    if(this.profile === 'Defensivo'){
      this.data=[{
        'promedioAnual':1.5,
        'mejorAnio':5.4,
        'peorAnio':0.2,
        'speech': 'Para inversionistas que buscan la seguridad en sus inversiones'
      }]
    }
    else if(this.profile === 'Altamente Conservador'){
      this.data=[{
        'promedioAnual':3.0,
        'mejorAnio':17.5,
        'peorAnio':-6.5,
        'speech': 'Para inversionistas que buscan la seguridad en sus inversiones y en menor medida, la generación de ingresos corrientes'
      }]
    }
    else if(this.profile === 'Conservador'){
      this.data=[{
        'promedioAnual':4.3,
        'mejorAnio':27.6,
        'peorAnio':-16.6,
        'speech': 'Para inversionistas de largo plazo que buscan crecimiento en su inversión a un nivel medio de riesgo y que podrían requerir generación de ingresos corrientes'
      }]
    }
    else if(this.profile === 'Moderado'){
      this.data=[{
        'promedioAnual':5.0,
        'mejorAnio':36.6,
        'peorAnio':-27.5,
        'speech': 'Para inversionistas de largo plazo que buscan crecimiento moderado en su inversión a un nivel medio - alto de riesgo, y que no requieren ingresos corrientes'
      }]
    }
    else if(this.profile === 'Agresivo'){
      this.data=[{
        'promedioAnual':5.8,
        'mejorAnio':41.9,
        'peorAnio':-35.4,
        'speech': 'Para inversionistas de largo plazo que buscan un significativo crecimiento en su inversión a un nivel de alto riesgo, y que no requieren ingresos corrientes'
      }]
    }
  }

  vistaRegistro() {
    this._router.navigate(['/registro']);
  }
}

