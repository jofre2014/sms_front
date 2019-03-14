import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SMS } from '@ionic-native/sms';

import { HttpClientModule  } from '@angular/common/http';
import { ContactoServiceProvider } from '../providers/contacto-service/contacto-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SMS,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactoServiceProvider
  ]
})
export class AppModule {}
