import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../../service/usuario.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.page.html',
    styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
    parametro: string;

    avatars = [
        {
            img: 'av-1.png',
            seleccionado: true
        },
        {
            img: 'av-2.png',
            seleccionado: false
        },
        {
            img: 'av-3.png',
            seleccionado: false
        },
        {
            img: 'av-4.png',
            seleccionado: false
        },
        {
            img: 'av-5.png',
            seleccionado: false
        },
        {
            img: 'av-6.png',
            seleccionado: false
        },
        {
            img: 'av-7.png',
            seleccionado: false
        },
        {
            img: 'av-8.png',
            seleccionado: false
        },
    ];

    constructor(private usuarioService: UsuarioService, private router: Router, private notify: ToastController) {
    }

    ngOnInit() {
    }

    login(flogin: NgForm) {
        console.log(flogin.valid);
    }

    /*verifyUser(parametro) {
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
*/
}
