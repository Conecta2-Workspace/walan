import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

/*
  Generated class for the MediawikiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MediawikiServiceProvider {

  public mediawikiAPI: string;

  constructor(public http: Http, public alertCtrl: AlertController) {
    //this.mediawikiAPI = 'http://knt2.com/walan/api.php?';  <<--PROD

    this.mediawikiAPI = '/api?';
  }

  /**
   * Tester de la api. Forma remota
   */
  testApi() {
    this.http.get(this.mediawikiAPI + 'action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      });

  }

  /**
   * Genera un token para el logeo
   * @param user 
   */
  getToken(user: string) {
    let request = this.mediawikiAPI + 'action=login&format=json&lgname=' + user;
    let http = this.http;

    return new Promise(function (resolve: any, reject) {
      //--
      http.post(request, null)
        .timeout(3000)
        .map(res => res.json())
        .subscribe(
        data => {
          resolve({ "token": data.login.token, "result": data.login.result });
        },
        error => resolve({ "msg": error, "result": "error" })
        );
      //--
    });
  }

  /**
   * Login a mediawiki WALAN
   * @param user 
   * @param pwd 
   * @param token
   */
  login(user: string, pwd: string, token: string) {
    let request = this.mediawikiAPI + 'action=login&format=json&lgname=' + user + '&lgpassword=' + pwd + '&lgtoken=' + token;
    let http = this.http;

    return new Promise(function (resolve: any, reject) {
      //--
      http.post(request, null)
        .timeout(3000)
        .map(res => res.json())
        .subscribe(
        data => {          
          resolve({ "lgtoken": data.login.lgtoken, "result": data.login.result, "idSesion": data.login.sessionid });
        },
        error => resolve({"result": error })
        );
      //--
    });

  }


/**
 * Salida de sesion
 */
  logout() {
    this.http.get(this.mediawikiAPI + 'action=logout&format=json')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      });
  }
}