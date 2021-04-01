import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

thisPage = 'home';
  
  constructor(private loadingController: LoadingController,
    private route: Router) { }

  ngOnInit() {

    this.showLoader();
  }

  async showLoader() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
  }
  
  public dismissLoading() {
    console.log('Loading dismissed called!');
    this.loadingController.dismiss();
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