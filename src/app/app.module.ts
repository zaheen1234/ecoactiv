import { NgModule, enableProdMode} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { IonicStorageModule } from '@ionic/storage';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule,],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     WebView,
  
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

	constructor(library: FaIconLibrary) {
   library.addIconPacks(fas);
 //library.addIcons(faCoffee);
  } 
}

