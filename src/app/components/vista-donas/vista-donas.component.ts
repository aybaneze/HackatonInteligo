import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component ({
  selector: 'app-vista-donas',
  templateUrl: './vista-donas.component.html',
  styleUrls: ['./vista-donas.component.css']
})

export class VistaDonasComponent implements OnInit {

  profile: string;

  constructor(private _router: Router) { }

  ngOnInit() { }

  vistaRegistro(){   

    this._router.navigate(['/registro']);
    
  }

}

