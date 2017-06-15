import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the MediawikiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MediawikiServiceProvider {

  public mediawikiAPI: string;

  constructor(public http: Http) {
    //this.mediawikiAPI = 'http://knt2.com/walan/api.php?';  <<--PROD

    this.mediawikiAPI = '/api?';
  }

/**
 * Tester de la api. Forma remota
 */
  testApi() {
    this.http.get(this.mediawikiAPI+'action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json')
      .map(res => res.json())
      .subscribe(data => {
            console.log(data);
        });

  }

/**
 * Login a mediawiki WALAN
 * @param user 
 * @param pwd 
 */
  login(user:string,pwd:string){
    let request = this.mediawikiAPI+'action=login&format=json&lgname='+user+'&lgpassword='+pwd+'&lgtoken=18248f5b18880a69512ed07b7095fcaf';  
    console.log(request);

    this.http.post(request, null )
      .map(res => res.json())
      .subscribe(data => {
            console.log(data);
        });
  }
    
}