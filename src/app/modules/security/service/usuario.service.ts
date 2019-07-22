import {Injectable} from '@angular/core';
import {UsuarioApp} from '../classes/UsuarioApp';
import {PROC_XML_CONSULTAS_APP, PROC_XML_REST_GENERICO} from '../../system/generic/classes/constant';
import {UsuarioServidor} from '../classes/UsuarioServidor';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {Util} from '../../system/generic/classes/util';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {Ruta} from '../classes/Ruta';
import {PROC_XML_REGISTRAR_USUARIO_PERSONA} from '../../system/generic/classes/ContanteTransaccional';

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
        requestOptions.restUrl = PROC_XML_REST_GENERICO;
        usuario.fechaNacimiento = this.utils.stringToDateFormat(usuario.fechaNacimiento);
        return this.genericService.ejecucionGenerica(usuario, PROC_XML_REGISTRAR_USUARIO_PERSONA, requestOptions);
    };

    public actualizarUsuario = function(usuario: UsuarioApp) {
        const requestOptions = new RequestOptions();
        requestOptions.restUrl = PROC_XML_REST_GENERICO;
        console.log('Empieza la actualizacion');
        return null; //this.genericService.ejecucionGenerica(usuario, PROC_XML_REGISTRAR_USUARIO, requestOptions);
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
        return null; //this.genericService.getGenericObjects(obj, PROC_XML_CONSULTAS_APP, requestOptions);
    };


    async obtenerSectores() {
        const requestOptions = new RequestOptions();
        const obj = {
            datoPrueba: '001',
            tipoConsulta: 'SECTORES'
        };
        return <Ruta> await this.genericService.getGenericObjects(obj, PROC_XML_CONSULTAS_APP, requestOptions);
    }


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
        return null;// this.genericService.getGenericObjects(obj, PROC_XML_CONSULTAS_USUARIO, requestOptions);
    };

}
