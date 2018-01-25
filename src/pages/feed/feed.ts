import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Alert } from 'ionic-angular/components/alert/alert';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Rodrigo Porciúncula";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    // alert(num1 + num2);
  }

  // Parte do ciclo de vida de uma página (Primeira função a ser executada)
  ionViewDidLoad() {
    // this.somaDoisNumeros(10, 99);
  }
}
