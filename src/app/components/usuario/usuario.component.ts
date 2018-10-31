import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MandrilService } from 'src/app/services/mandril.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  closeResult: string;
  model: any = {};
  showModalResult;
  //Para enviar correo
  email: string;
  data: any = null;
  name: string = 'Inteligo SAB';
  show: string;

  @ViewChild('showResult') showResult: ElementRef;

  constructor(
    public usuarioService: UsuarioService, private modalService: NgbModal, private madril: MandrilService, private _router: Router) { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit() {
    // Me trae todo el arreglo de datos
    this.usuarioService.getUsuario();
    /* this.resetForm(this.model); */
    this.model.gender = '0';

  }

  onSubmit() {
    console.log(this.model);
    this.usuarioService.insertUsuario(this.model);
    setTimeout(() => {
      this.showResult.nativeElement;
    }, 400);
    this.email = this.model.email;
  }

   sendEmail() {
    console.log('enviar');
    this.data = {
      key: 'ZGiSDAUGJIgaCMIqm9ysPA',
      message: {
        html: `<p style="color:black; font-size:16px">Este mensaje se le envió porque usted ha rellenado el
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
            email: this.email,
            name: "Empresa Inteligo",
            type: "to"
          }
        ],
        headers: {
          'Reply-To': "marycatty@laboratoria.la"
        },
        attachments: [
        {
            "type": "text/plain",
            "name": "contrato.pdf",
            "content": "ZXhhbXBsZSBmaWxl"
        }
      ],

      }
    };

    this.madril.sendMadril(this.data).subscribe(result => {
      console.log(result);
    });
    this._router.navigate(['']);
  }
}
