import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class MandrilService {
  private url = 'https://mandrillapp.com/api/1.0/messages/send.json'

  constructor(private httpMadril : HttpClient ) { 

  }

  sendMadril (data):Observable<any>{
    return this.httpMadril.post(this.url,data);
  }
}
