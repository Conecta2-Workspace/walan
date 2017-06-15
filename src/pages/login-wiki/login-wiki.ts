import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/local-bd-service/user/user-service';
import { MediawikiServiceProvider } from '../../providers/mediawiki-service/mediawiki-service';
import { User } from '../../providers/local-bd-service/user/user.model';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the LoginWikiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login-wiki',
  templateUrl: 'login-wiki.html',
})
export class LoginWikiPage {
  public user: string;
  public pwd: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadCtrl: LoadingController,
    public userService: UserServiceProvider,
    public mediawikiService: MediawikiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginWikiPage');
  }


  enviar() {
    let token: string;
    let nav = this.navCtrl;

    let alert = this.alertCtrl.create({ buttons: ['OK'] });
    
    let loading = this.loadCtrl.create({ content: 'Espere, conectando a knt2.com...' });
    loading.present();

    //Se obtiene token
    this.mediawikiService.getToken(this.user)
      .then((data: any) => {
        if (data.result != "error") {
          token = data.token;

          //Ejecuta el logeo
          this.mediawikiService.login(this.user, this.pwd, token)
            .then((data: any) => {
              if (data.result == "Success") {
                console.debug('Logeo correcto');

                //Se almacena la entidad
                let entidadUser = new User();
                entidadUser.idSession = data.idSesion;
                entidadUser.pwdWiki = this.pwd;
                entidadUser.token = token;
                entidadUser.usrWiki = this.user;

                this.userService.saveUser(entidadUser);

                loading.dismiss();
                alert.setTitle('Bienvenido');
                alert.setSubTitle('Logeo correcto');
                alert.present();

                //Regresa a main
                nav.push(HomePage);

              } else {
                loading.dismiss();
                alert.setTitle('ERROR');
                alert.setSubTitle('Logeo incorrecto. ' + data.result);
                alert.present();
              }

            });

        } else {
          loading.dismiss();
          alert.setTitle('ERROR');
          alert.setSubTitle('Error al obtener el token. ' + data.msg);
          alert.present();
        }

      });


  }
}
