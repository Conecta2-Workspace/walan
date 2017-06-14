import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-editor',
  templateUrl: 'editor.html',
})



export class EditorPage {
  public ckeditor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }


  onChange(event) {
    console.log(event);
  }
  onReady(event) {
    this.ckeditor = window['CKEDITOR'].instances.editor1;
  }
  onFocus(event) {

  }
  onBlur(event) {

  }


  save(event) {

    console.log(this.ckeditor);


  }

  poner() {


    console.log(this.ckeditor.getData());

    this.ckeditor.insertHtml('<p>This is a new paragraph.</p>');

    console.log(this.ckeditor);

    
  }

}
