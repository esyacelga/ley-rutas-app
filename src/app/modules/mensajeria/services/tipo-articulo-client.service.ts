import {Injectable} from '@angular/core';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {TipoArticulo} from '../classes/tipo-articulo';
import {PROC_XML_CRUD_TIPO_ARTICULO} from '../../system/generic/classes/ContanteTransaccional';
import {PROC_XML_CONSULTAS_APP} from '../../system/generic/classes/constant';
import {URL_CREAR_TIPO_ARTICULO} from '../../system/generic/classes/UrlPostRestService';

@Injectable({
    providedIn: 'root'
})
export class TipoArticuloClientService {


    constructor(private genericService: ExecuteCallProcedureService) {
    }

    async registarTipoArticulo(tipoArticulo: TipoArticulo) {
        const requestOptions = new RequestOptions();
        return <TipoArticulo> await this.genericService.servicioRestGenerico(tipoArticulo, URL_CREAR_TIPO_ARTICULO, requestOptions);
    }


    async obtenerTipoArticulos() {
        const requestOptions = new RequestOptions();
        const objConsulta = {
            tipoConsulta: 'TIPOARTICULO',
            data: '0'
        };
        if (objConsulta) {
            return await this.genericService.getGenericObjects(objConsulta, PROC_XML_CONSULTAS_APP, requestOptions);
        }
    }

}
