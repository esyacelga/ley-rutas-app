import {Injectable} from '@angular/core';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {TipoArticulo} from '../classes/tipo-articulo';
import {URL_CREAR_TIPO_ARTICULO} from '../../system/generic/classes/UrlPostRestService';

@Injectable({
    providedIn: 'root'
})
export class TipoArticuloClientService {


    constructor(private genericService: ExecuteCallProcedureService) {
    }

    async registarTipoArticulo(tipoArticulo: TipoArticulo) {
        const requestOptions = new RequestOptions();
        return <TipoArticulo> await this.genericService.servicioRestGenericoPost(tipoArticulo, URL_CREAR_TIPO_ARTICULO, requestOptions);
    }


    async obtenerTipoArticulos() {
        const requestOptions = new RequestOptions();
        return await this.genericService.servicioRestGenericoGet({}, URL_CREAR_TIPO_ARTICULO, requestOptions);
    }

}
