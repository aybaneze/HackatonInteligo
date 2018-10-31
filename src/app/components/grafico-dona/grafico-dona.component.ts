import { Component, OnInit } from "@angular/core";
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: "app-grafico-dona",
  templateUrl: "./grafico-dona.component.html",
  styleUrls: ["./grafico-dona.component.css"]
})
export class GraficoDonaComponent implements OnInit {
  // Doughnut
  profile: string;
  doughnutChartLabels: string[];
  doughnutChartData: number[];
  doughnutChartType: string = "doughnut";
  doughnutChartLegend: boolean = true;
  doughnutChartOptions;
  doughnutColors: any;

  constructor(private _session: SessionStorageService) { }

  ngOnInit() {
    this.profile = this._session.retrieve('profile');
    console.log(this.profile);
    this.mostrarData();
    this.doughnutChartOptions = {
      responsive: true,
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontSize: 13,
          boxWidth: 70,
        }
      }
    }
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  mostrarData() {
    if (this.profile === 'Defensivo') {
      this.doughnutChartLabels = ["Caja y Equivalentes", "Renta Fija", "Renta Variable", "Renta Alternativa"];
      this.doughnutChartData = [100, 0, 0, 0];
    }
    else if (this.profile === 'Altamente Conservador') {
      this.doughnutChartLabels = ["Caja y Equivalentes", "Renta Fija", "Renta Variable", "Renta Alternativa"];
      this.doughnutChartData = [40, 60, 0, 0]
    }
    else if (this.profile === 'Conservador') {
      this.doughnutChartLabels = ["Caja y Equivalentes", "Renta Fija", "Renta Variable", "Renta Alternativa"];
      this.doughnutChartData = [10, 73, 12, 5]
    }
    else if (this.profile === 'Moderado') {
      this.doughnutChartLabels = ["Caja y Equivalentes", "Renta Fija", "Renta Variable", "Renta Alternativa"];
      this.doughnutChartData = [5, 48, 35, 12]
    }
    else if (this.profile === 'Agresivo') {
      this.doughnutChartLabels = ["Caja y Equivalentes", "Renta Fija", "Renta Variable", "Renta Alternativa"];
      this.doughnutChartData = [2, 28, 50, 20]
    }
  }
}
