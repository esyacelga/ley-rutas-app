import {Component, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {UsuarioService} from '../../../service/usuario.service';
import {DURATION_TOAST} from '../../../../system/generic/classes/constant';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.page.html',
    styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

    parametro: string;

    constructor(private usuarioService: UsuarioService, private router: Router, private notify: ToastController) {
    }

    ngOnInit() {
    }

    verifyUser(parametro) {
        const data = '{"idUsuarioApp":"5","correo":null,"clave":"seya1922"}';
        const test = JSON.parse(data);
        this.usuarioService.verificarUsuario(parametro).then(respuesta => {
            if (respuesta) {
                this.router.navigate(['/password', respuesta.idUsuarioApp]);
            } else {
                this.presentToast('El usuario no existe', 'warning');
            }
        });
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
