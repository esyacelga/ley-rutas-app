import {Injectable} from '@angular/core';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {TipoArticulo} from '../classes/tipo-articulo';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {PROC_XML_CRUD_ARTICULO_SEGMENTO} from '../../system/generic/classes/ContanteTransaccional';
import {ArticuloSegmento} from '../classes/articulo-segmento';
import {PROC_XML_CONSULTAS_APP} from '../../system/generic/classes/constant';

@Injectable({
    providedIn: 'root'
})
export class ArticuloSegmentoClientService {

    constructor(private genericService: ExecuteCallProcedureService) {
    }


    async registarTipoArticuloSegmento(articuloSegmento: ArticuloSegmento) {
        const requestOptions = new RequestOptions();
        return <TipoArticulo> await this.genericService.ejecucionGenerica(articuloSegmento, PROC_XML_CRUD_ARTICULO_SEGMENTO, requestOptions);
    }

    async obtenerSegmentos() {
        const requestOptions = new RequestOptions();
        const objConsulta = {
            tipoConsulta: 'TIPOSEGMENTO',
            data: '0'
        };
        if (objConsulta) {
            return await this.genericService.getGenericObjects(objConsulta, PROC_XML_CONSULTAS_APP, requestOptions);
        }
    }




}
