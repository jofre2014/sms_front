import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contacto } from '../../app/contactos/contactos';


/*
  Generated class for the ContactoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactoServiceProvider {

  
  private urlEndPoint = 'http://190.15.196.153:8087/api/contactos';

  constructor(public http: HttpClient) {
    console.log('Hello ContactoServiceProvider Provider');
  }


  getContactos(): Observable<Contacto[]>{
    console.log("en el servicio - getcontactos");    
    return this.http.get<Contacto[]>(this.urlEndPoint);
  }

}
