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

  constructor(private _router: Router, private _sesion: SessionStorageService) { }

  ngOnInit() {
    this.profile = this._sesion.retrieve('profile');
  }

  vistaRegistro() {
    this._router.navigate(['/registro']);
  }
}

