import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goToThisPage(where) {
    if (where === 'home') {
      this.route.navigate(['/home']);
    } else if(where === 'privacy') {
      this.route.navigate(['/recordings-list']);
    } else if( where === 'terms') {
      this.route.navigate(['/success-page']);
    } else {
      this.route.navigate(['/record-answer']);
    }
  }
}

