import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from "ngx-webstorage";



@Component ({
  selector: 'app-vista-donas',
  templateUrl: './vista-donas.component.html',
  styleUrls: ['./vista-donas.component.css']
})

export class VistaDonasComponent implements OnInit {

  profile: string;

  constructor(private _sesion: SessionStorageService) { }

  ngOnInit() {
    this.profile = this._sesion.retrieve('profile');
  }

}

