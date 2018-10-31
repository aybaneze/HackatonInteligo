import { Component, OnInit } from '@angular/core';
import { MandrilService } from 'src/app/services/mandril.service';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})

export class CorreoComponent implements OnInit {

  correo: string;
  data: any = null;
  name: string = 'Inteligo SAB';



  constructor(private madril: MandrilService) { }

  ngOnInit() { }

  sendEmail() {
    console.log('enviar')
    this.data = {
      key: 'ZGiSDAUGJIgaCMIqm9ysPA',
      message: {
        html: `<p style="color:black; font-size:16px">Este mensaje le ha sido enviado porque usted ha rellenado el 
        cuestionario de la <strong>Bolsa de Valores de Inteligo</strong> para poder evaluar su perfil y portafolio.Adjunto archivo 
        con detalle de su perfil y portafolio.<br></p>
        <p><strong>Bolsa de Valores Inteligo</strong><br>
        <img src="https://www.inteligosab.com/core/assets/website/images/logointeligosab.png"><br><br>
        <strong>Central Telefónica: </strong>
        T(511) 625 9500<br>
        <strong>Horario de atención: </strong> 
        Lunes a viernes de 9:00 a.m. a 5:00 p.m.<br>
        <strong>Oficina Principal Inteligo SAB: </strong>
        Av. Rivera Navarrete 501. Piso 21 San Isidro, Lima 27, Perú.
        </p>`,
        text: "Bolsa de Valores Inteligo",
        subject: 'Informe perfil y portafolio Inteligo',
        from_email: "Inteligo@laboratoria.la",
        from_name: "INTELIGO",
        to: [
          {
            email: `${this.correo}`,
            name: "Empresa Inteligo",
            type: "to"
          }
        ],
        headers: {
          'Reply-To': "marycatty@laboratoria.la"
        }

      }
    }
    this.madril.sendMadril(this.data).subscribe(result => {
      console.log(result);

    });
  }

}
