import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditorPage } from '../../pages/editor/editor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /**
   * Invoca pagina del editor 
   * 
   * */
  crearPageWiki() {
    this.navCtrl.push(EditorPage);
  }

}
