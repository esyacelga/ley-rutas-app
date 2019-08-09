import {Injectable} from '@angular/core';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {TipoArticulo} from '../classes/tipo-articulo';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {PROC_XML_CRUD_ARTICULO_SEGMENTO} from '../../system/generic/classes/ContanteTransaccional';
import {ArticuloSegmento} from '../classes/articulo-segmento';
import {URL_CRUD_ARTICULO_SEGMENTO, URL_OBTENER_TODOS_ARTICULO_SEGMENTO} from '../../system/generic/classes/UrlPostRestService';

@Injectable({
    providedIn: 'root'
})
export class ArticuloSegmentoClientService {

    constructor(private genericService: ExecuteCallProcedureService) {
    }


    async registarTipoArticuloSegmento(articuloSegmento: ArticuloSegmento) {
        const requestOptions = new RequestOptions();
        return <TipoArticulo> await this.genericService.servicioRestGenericoPost(articuloSegmento, URL_CRUD_ARTICULO_SEGMENTO, requestOptions);
    }

    async obtenerSegmentos() {
        const requestOptions = new RequestOptions();
        return await this.genericService.servicioRestGenericoGet({}, URL_OBTENER_TODOS_ARTICULO_SEGMENTO, requestOptions);
    }


}
