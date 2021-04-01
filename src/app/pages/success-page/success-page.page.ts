import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.page.html',
  styleUrls: ['./success-page.page.scss'],
})
export class SuccessPagePage implements OnInit {

  thisPage = 'terms';

  constructor(private route: Router, private loadingController: LoadingController) {
     
    }

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
