import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../../service/usuario.service';
import {Router} from '@angular/router';
import {RegistroMensajes} from '../../classes/RegistroMensajes';
import {Ruta} from '../../classes/Ruta';
import {UsuarioApp} from '../../classes/UsuarioApp';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    lstSectores: Array<Ruta>;
    usuarioApp: UsuarioApp = new UsuarioApp();
    loginForm: FormGroup;
    registoMensajes: RegistroMensajes = new RegistroMensajes();
    error_messages = this.registoMensajes.error_messages;

    constructor(public usuarioService: UsuarioService
        , public formFuilder: FormBuilder, private router: Router) {
        this.loginForm = this.formFuilder.group({
            primerNombre: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(150)
            ])),
            fechaNacimiento: new FormControl('', Validators.compose([
                Validators.required
            ])),
            identificacion: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(13)
            ])),
            primerApellido: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(100)
            ])),
            segundoApellido: new FormControl('', null),
            sector: new FormControl('', null),
            clave: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30)
            ])),
            passwordValidator: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30)
            ])),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30)
            ]))
        }, {validators: this.isEquals('clave', 'passwordValidator')});
    }

    isEquals(campo: string, campoToValidate: string) {
        return (group: FormGroup) => {
            const pass1 = group.controls[campo].value;
            const pass2 = group.controls[campoToValidate].value;
            if (pass1 === pass2) {
                return null;
            } else {
                return {
                    sonIguales: true
                };
            }
        };
    }


    async obtenerSectores() {
        // @ts-ignore
        this.lstSectores = await this.usuarioService.obtenerSectores();
        console.log(this.lstSectores);
    }


    registerNewUser() {
        const usuarioApp = <UsuarioApp> this.loginForm.value;

        this.usuarioService.registrarUsuario(usuarioApp).then(respuesta => {
            this.router.navigate(['/signin']);
            console.log('');
        });

    }

    ngOnInit() {
        this.obtenerSectores();
    }


}
