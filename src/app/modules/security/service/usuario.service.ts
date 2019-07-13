import {Injectable} from '@angular/core';
import {UsuarioApp} from '../classes/UsuarioApp';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {
    PROC_XML_CONSULTAS_USUARIO,
    PROC_XML_REGISTRAR_USUARIO,
    PROC_XML_REST_REGISTRO_USUARIO
} from '../../system/generic/classes/constant';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {UsuarioServidor} from '../classes/UsuarioServidor';
import {Util} from '../../system/generic/classes/util';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    playerId: String = null;
    usuario: UsuarioApp;
    authState;

    constructor(private genericService: ExecuteCallProcedureService, private utils: Util) {

    }


    public setUsuario = function(usario: UsuarioApp) {
        this.usuario = usario;
    };

    public isAuthenticated() {
        return this.authState;
    }

    public setAuthenticated = function(valor: Boolean) {
        this.authState = valor;
    };
    public registrarUsuario = function(usuario: UsuarioApp) {
        const requestOptions = new RequestOptions();
        requestOptions.restUrl = PROC_XML_REST_REGISTRO_USUARIO;
        usuario.opcional = 'CREACION';
        return this.genericService.ejecucionGenerica(usuario, PROC_XML_REGISTRAR_USUARIO, requestOptions);
    };

    public actualizarUsuario = function(usuario: UsuarioApp) {
        const requestOptions = new RequestOptions();
        requestOptions.restUrl = PROC_XML_REST_REGISTRO_USUARIO;
        usuario.opcional = 'ACTUALIZACION';
        console.log('Empieza la actualizacion');
        return this.genericService.ejecucionGenerica(usuario, PROC_XML_REGISTRAR_USUARIO, requestOptions);
    };


    /**
     * Este me todo se ejecuta cuando en el guard de la aplicacion
     * no esta registrado el player id
     *
     */
    public actualizarPlayerId = function() {
        console.log('Ingreso a actualizar el id de usuario');
        console.log(this.playerId);
        console.log(this.usuario.playerID);
        if (this.playerId !== null && this.playerId !== '' && this.usuario && this.usuario.playerID !== this.playerId) {
            console.log('El player id no coincide con la base por lo que se empieza a actualizar');
            this.usuario.playerID = this.playerId;
            this.actualizarUsuario(this.usuario);
        }
    };

    public verificarUsuario = function(parametro: string) {
        const requestOptions = new RequestOptions();
        requestOptions.responseType = 1;
        const obj = {
            parametroXML: parametro,
            tipoConsulta: 'OBTENERUSUARIO'
        };
        return this.genericService.getGenericObjects(obj, PROC_XML_CONSULTAS_USUARIO, requestOptions);
    };

    async guardarConfiguracion(lstUsuarioServidor: Array<UsuarioServidor>) {
        // @ts-ignore
        lstUsuarioServidor = await this.genericService.getGenericObjects(new ContenedorUsuarioServidor('GUARDARCONFIGURACION', lstUsuarioServidor), PROC_XML_CONSULTAS_USUARIO);
        return lstUsuarioServidor;

    }


    async obtenerServidoresPorUsuario(usuario: string) {
        const requestOptions = new RequestOptions();
        let lstUsuarioServidor: Array<UsuarioServidor> = [];

        const obj = {
            parametroXML: usuario,
            tipoConsulta: 'OBTENERSERVIDORES'
        };
        // @ts-ignore
        const lista = await this.genericService.getGenericObjects(obj, PROC_XML_CONSULTAS_USUARIO, requestOptions);
        lstUsuarioServidor = this.utils.modificarValoresBooleanos(lista, 'verNotificacion');
        return lstUsuarioServidor;

    }

    public obtenerUsuarioPorId = function(parametro: string) {
        const requestOptions = new RequestOptions();
        requestOptions.responseType = 1;
        const obj = {
            parametroXML: parametro,
            tipoConsulta: 'obtenerUsuarioPorId'
        };
        return this.genericService.getGenericObjects(obj, PROC_XML_CONSULTAS_USUARIO, requestOptions);
    };

}
