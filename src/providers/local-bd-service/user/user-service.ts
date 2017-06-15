import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from './user.model';


@Injectable()
export class UserServiceProvider {



  constructor(private localBD: Storage) {
  }

  
  /**
   * 
   * @param user Guarda la entidad user
   */
  saveUser(user: User) {

    this.localBD.set('User', user);

  }

  /**
   * Consulta el registro del usuario
   */
  get() {

    /*
    let bd = this.local;

    return new Promise(function (resolve: any, reject) {

      //Consulta  a la base local la entidad Registro
      bd.get('Registro')
        .then((data) => {
          //Sin registro
          if (data == null) {
            //Le configuracion del dispositivo
            let dispositivoInfo = minRegistro.infoDispositivoService.get();

            //Crea y setea estructura de la entidad
            let entidadRegistro: { dispositivo: any, idioma: string, tema: string };
            entidadRegistro = { dispositivo: dispositivoInfo, idioma: 'en', tema: '' };

            //Setea valor
            bd.set('Registro', entidadRegistro);

            //Se consume servicio para informar. Pendiente

            //Configura salida
            minRegistro.dispositivo = entidadRegistro.dispositivo;
            minRegistro.idioma = entidadRegistro.idioma;
            minRegistro.tema = entidadRegistro.tema;
            resolve(minRegistro);
          else {
              //Configura salida
              console.log(data);
              minRegistro.dispositivo = data.dispositivo;
              minRegistro.idioma = data.idioma;
              minRegistro.tema = data.tema;
              resolve(minRegistro);


            });

    });
    */
  }


}