import {Injectable} from '@angular/core';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {TipoArticulo} from '../classes/tipo-articulo';
import {PROC_XML_CRUD_TIPO_ARTICULO} from '../../system/generic/classes/ContanteTransaccional';

@Injectable({
    providedIn: 'root'
})
export class TipoArticuloClientService {

    constructor(private genericService: ExecuteCallProcedureService) {
    }

    async registarTipoArticulo(tipoArticulo: TipoArticulo) {
        const requestOptions = new RequestOptions();
        return <TipoArticulo> await this.genericService.getGenericObjects(tipoArticulo, PROC_XML_CRUD_TIPO_ARTICULO, requestOptions);
    }

}
