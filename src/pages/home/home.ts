import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditorPage } from '../../pages/editor/editor';
import { MediawikiServiceProvider } from '../../providers/mediawiki-service/mediawiki-service';
import { LoginWikiPage } from '../../pages/login-wiki/login-wiki'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public mediawikiService: MediawikiServiceProvider) {

  }

  /**
   * Invoca pagina del editor 
   * 
   * */
  crearPageWiki() {
    this.navCtrl.push(EditorPage);
  }


  getApi(){
    this.mediawikiService.testApi();
  }

  login(){
    this.navCtrl.push(LoginWikiPage);
    //this.mediawikiService.login('EVERT','12003295');
  }

  logout(){
    this.mediawikiService.logout();
  }

}
