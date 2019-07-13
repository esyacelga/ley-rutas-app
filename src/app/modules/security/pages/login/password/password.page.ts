import {Component, OnInit} from '@angular/core';
import {UsuarioApp} from '../../../classes/UsuarioApp';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../../../service/usuario.service';
import {Platform, ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {DURATION_TOAST} from '../../../../system/generic/classes/constant';

@Component({
    selector: 'app-password',
    templateUrl: './password.page.html',
    styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
    user: UsuarioApp = null;
    parametro: string;

    constructor(
        private activateRoute: ActivatedRoute,
        private usuarioSvc: UsuarioService,
        private router: Router,
        private platform: Platform,
        private storage: Storage,
        private notify: ToastController
    ) {

    }

    ngOnInit() {
        this.activateRoute.params.subscribe(params => {
            this.usuarioSvc.obtenerUsuarioPorId(params.id).then(respuesta => {
                this.user = respuesta;
            });
        });
    }

    verifyUser(parameter) {
        if (this.user.clave === parameter) {
            this.usuarioSvc.setAuthenticated(true);
            console.log('Usuario Obtenido');
            console.log(JSON.stringify(this.user));
            this.usuarioSvc.setUsuario(this.user);
            // this.loginStorageSvc.guardarStorage(this.user);
            this.router.navigate(['/tabs']);
        } else {
            this.usuarioSvc.setAuthenticated(false);
            this.presentToast('La contraseña es incorrecta, por favor vuelva a ingresarla', 'warning');
        }
    }


    private async presentToast(mensaje, color) {
        const toast = await this.notify.create({
            message: mensaje,
            duration: DURATION_TOAST,
            color: color
        });
        toast.present();
    }
}
