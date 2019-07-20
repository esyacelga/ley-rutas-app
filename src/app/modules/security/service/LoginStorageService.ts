import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Platform} from '@ionic/angular';
import {UsuarioService} from './usuario.service';
import {UsuarioApp} from '../classes/UsuarioApp';
import {Util} from '../../system/generic/classes/util';

@Injectable({
    providedIn: 'root'
})
export class LoginStorageService {

    user: UsuarioApp;

    constructor(private storage: Storage, private platform: Platform, private usuarioSvc: UsuarioService, private utilSvc: Util) {
    }

    cargarUsuarioStorage() {
        const promesa = new Promise((resolve, reject) => {
            if (this.platform.is('cordova')) {
                console.log('Inicializando storage');
                console.log('Storage inicializado ');
                this.storage.get('usuario').then((val) => {
                    let dataUser = null;
                    try {
                        dataUser = JSON.parse(JSON.stringify(val));
                        this.usuarioSvc.usuario = dataUser;
                    } catch (error) {
                        reject(error);
                    }
                    resolve(dataUser);
                }, reason => {
                    console.log(this.user);
                    reject('Error al cargar el storage');
                });

            } else {
                if (localStorage.getItem('usuario')) {
                    this.user = JSON.parse(localStorage.getItem('usuario'));
                    this.usuarioSvc.usuario = this.user;
                }
                resolve(this.user);
            }
        });
        return promesa;
    }

    guardarStorage(usuario: UsuarioApp) {
        if (this.platform.is('cordova')) {
            this.storage.set('usuario', usuario);
        } else {
            localStorage.setItem('usuario', JSON.stringify(usuario));
        }
    }
}
