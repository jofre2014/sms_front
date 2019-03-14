import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { SMS } from '@ionic-native/sms';
import { ContactoServiceProvider } from '../../providers/contacto-service/contacto-service';

import { concatAll } from 'rxjs/operators';

import 'rxjs/operators';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  telefono: number;
  mensaje: string;
  salida: string;

  contactosArray: any;

  constructor(public navCtrl: NavController,
    private toast: ToastController,
    private sms: SMS,
    private contactoService: ContactoServiceProvider) {

  }

  sendSMS() {
    try {

      //await this.sms.send(String(this.telefono), this.mensaje);


      this.contactoService.getContactos().pipe(
        concatAll()
      ).subscribe(
        contacto => {
          let telefono = contacto['telefono'];
          let msj = `Señor ${contacto['nombre']}, recuerde abonar su factura. Importe a pagar: $ ${contacto['importe']}`

          console.log(telefono, ':', msj)

          this.salida = `enviando sms: ${telefono}: ${msj}`;
          
          this.envio( telefono, msj);
           /*
          this.sms.send(String(this.telefono), this.mensaje).then(
            () => {
              let toast = this.toast.create({
                message: 'mensajes enviado',
                duration: 3000
              });

              toast.present();
            }).catch(
            () => {
              let toast = this.toast.create({
                message: 'mensajes no enviado',
                duration: 3000
              });
              toast.present();
            })*/


          }
      ), (error) => this.salida =  `Error: ${error}`; 



    } catch (e) {


    }
  }
    
  

  async envio(numero: string, sms: string){

    await this.sms.send(String(numero), sms).then(
      () => {
        let toast = this.toast.create({
          message: 'mensajes enviado',
          duration: 3000
        });

        toast.present();
      }).catch(
      () => {
        let toast = this.toast.create({
          message: 'mensajes no enviado',
          duration: 3000
        });
        toast.present();
        });
      }


}
