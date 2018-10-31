import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { SessionStorageService } from 'ngx-webstorage';

import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";
import { ViewEncapsulation } from "@angular/core";
import { CuestionarioService } from "../services/cuestionario.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cuestionario",
  templateUrl: "./cuestionario.component.html",
  styleUrls: ["./cuestionario.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class CuestionarioComponent implements OnInit {
  closeResult: string;
  preguntas = null;
  number = 1;
  puntaje: number = null;
  grupo: string;
  idPregunta: number;
  totalGrupo1 = 0;
  totalGrupo2 = 0;
  model: any = {};
  answers: Array<any> = [];
  showButton: Boolean = true;
  showButtonFinalize: Boolean = false;
  profile: string;
  showModalResult;
  showError: Boolean = false;
  private modalRef: NgbModalRef;
  @ViewChild('warning') warning: ElementRef;
  //
  constructor(
    private modalService: NgbModal,
    private _cuestionario: CuestionarioService,
    private _sessinSt: SessionStorageService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.preguntas = this._cuestionario.getPreguntas();
  }

  open(content) {
    this.modalRef = this.modalService.open(content, {
      windowClass: "",
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
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

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  validateRadioButton() {
    console.log('validate');
    if (this.puntaje == null) {
      console.log('no hay');
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
    } else if (this.puntaje !== null) {
      console.log(this.puntaje);
      this.number++;
      this.showError = false;
      this.puntaje = null;
    }
  }

  onSubmit() {
    this.validateRadioButton();

    const keys = Object.keys(this.model);
    for (let index = 0; index < keys.length; index++) {
      const element = +keys[index];
      if (element > 0 && element <= 4) {
        this.totalGrupo1 = this.totalGrupo1 + Number(this.model[element]);
      } else if (element > 4 && element <= 8) {
        this.totalGrupo2 = this.totalGrupo2 + Number(this.model[element]);
      }
    }
    this.perfil(this.totalGrupo1, this.totalGrupo2);
    this._sessinSt.store('showResult', 'true');
    // this.modalRef.close();
    this.showModalResult = true;
  }

  siguiente() {
    console.log(this.showError);
    console.log(this.puntaje);
    this.validateRadioButton();

    if (this.number === 1) {
      this.showButton = true;
    } else if (this.number === 8) {
      this.showButton = false;
      this.showButtonFinalize = true;
    }


  }

  radioChangeOne(event) {
    this.showError = false;
    this.puntaje = event.target.getAttribute("data-puntaje");
    console.log(this.puntaje);
    // this.grupo = event.target.getAttribute("data-grupo");
    // this.idPregunta = event.target.getAttribute("data-idPregunta");
    // this.showButton = true;
    // console.log("puntaje", this.puntaje);
  }

  perfil(total1, total2) {
    if (total1 === 3) {
      this.profile =
        total2 >= 0 && total2 <= 20 ? "Defensivo" : "Altamente conservador";
    } else if (total1 === 5) {
      this.profile =
        total2 >= 0 && total2 <= 12 ? "Defensivo" : "Altamente conservador";
    } else if (total1 === 7) {
      this.profile =
        total2 >= 0 && total2 <= 4 ? "Defensivo" : "Altamente conservador";
    } else if (total1 === 9) {
      this.profile = total2 >= 0 && total2 <= 32 ? "Altamente conservador" : "";
    } else if (total1 === 11) {
      this.profile =
        total2 >= 0 && total2 <= 28 ? "Altamente conservador" : "Conservador";
    } else if (total1 === 13 || total1 === 15) {
      this.profile =
        total2 >= 0 && total2 <= 20 ? "Altamente conservador" : "Conservador";
    } else if (total1 === 15) {
      this.profile =
        total2 >= 0 && total2 <= 12 ? "Altamente conservador" : "Conservador";
    } else if (total1 === 17) {
      this.profile =
        total2 >= 0 && total2 <= 4 ? "Altamente conservador" : "Conservador";
    } else if (total1 === 19 || total1 === 21) {
      this.profile = total2 >= 0 && total2 <= 32 ? "Conservador" : "";
    } else if (total1 === 23) {
      this.profile = total2 >= 0 && total2 <= 28 ? "Conservador" : "Moderado";
    } else if (total1 === 25) {
      this.profile = total2 >= 0 && total2 <= 20 ? "Conservador" : "Moderado";
    } else if (total1 === 27 || total1 === 29 || total1 === 31) {
      if (total2 >= 0 && total2 <= 12) {
        this.profile = "Conservador";
      }
      this.profile = total2 >= 14 && total2 <= 28 ? "Conservador" : "Moderado";
    } else if (total1 === 29 || total1 === 31) {
      this.profile = total2 >= 14 && total2 <= 20 ? "Moderado" : "Agresivo";
    }
    this._sessinSt.store('profile', this.profile);
    console.log(this.profile);
  }
}
