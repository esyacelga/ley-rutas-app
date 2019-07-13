import {Component, OnInit} from '@angular/core';
import {UsuarioApp} from '../../../classes/UsuarioApp';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../../../service/usuario.service';
import {Platform, ToastController} from '@ionic/angular';

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
        private notify: ToastController
    ) {

    }

    ngOnInit() {

    }

    /*verifyUser(parameter) {
        if (this.user.clave === parameter) {
            this.usuarioSvc.setAuthenticated(true);
            console.log('Usuario Obtenido');
            console.log(JSON.stringify(this.user));
            this.usuarioSvc.setUsuario(this.user);
            //this.loginStorageSvc.guardarStorage(this.user);
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
    */
}
