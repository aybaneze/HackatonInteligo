import { Component, OnInit } from "@angular/core";
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: "app-grafico-dona",
  templateUrl: "./grafico-dona.component.html",
  styleUrls: ["./grafico-dona.component.css"]
})
export class GraficoDonaComponent implements OnInit{
  // Doughnut
  profile: string;
  doughnutChartLabels: string[] = ["a ", "b", "c"];
  doughnutChartData: number[] = [60, 20, 40];
  doughnutChartType: string = "doughnut";

  constructor(private _session: SessionStorageService) {}

  ngOnInit() {
    this.profile = this._session.retrieve('profile');
    console.log(this.profile);
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  mostrarData() {

  }0
}
