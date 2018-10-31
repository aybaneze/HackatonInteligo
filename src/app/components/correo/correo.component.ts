import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { MandrilService } from 'src/app/services/mandril.service';
import { SessionStorageService, LocalStorageService} from 'ngx-webstorage';

import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

import { Router } from '@angular/router';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})

export class CorreoComponent implements OnInit {

  correo: string;
  data: any = null;
  closeResult: string;
  name: string = 'Inteligo SAB';
  show: string;
  private modalRef: NgbModalRef;
  @ViewChild('showResult') showResult: ElementRef;

  constructor(private madril: MandrilService, private modalService: NgbModal, private _sessinSt: SessionStorageService, private _router: Router) { }

  ngOnInit() {
    this.show = this._sessinSt.retrieve('showresult');
    console.log(this.show);
    if (this._sessinSt.retrieve('showresult') === "true") {
      setTimeout(() => {
        this.showResult.nativeElement.click();
      }, 100);
    }
  }

  open(content) {
    this.modalRef = this.modalService.open(content, {
      windowClass: "",
      ariaLabelledBy: "modal-basic-title"
    });
    this.modalRef.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  sendEmail() {
    console.log('enviar');
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
    };

    this.madril.sendMadril(this.data).subscribe(result => {
      console.log(result);
      /*
      if (result[0].status === "sent") {
        alert("Se ha enviado correctamente");
      }
      */
    });
    this._router.navigate(['/mi-perfil']);
    this.modalRef.close();
  }

  private getDismissReason(reason: any): string {
    console.log('dismissssssssss');
    this._router.navigate(['/mi-perfil']);
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
