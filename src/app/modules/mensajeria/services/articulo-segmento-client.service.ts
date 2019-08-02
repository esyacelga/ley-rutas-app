import { Injectable } from '@angular/core';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {TipoArticulo} from '../classes/tipo-articulo';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {PROC_XML_CRUD_ARTICULO_SEGMENTO, PROC_XML_CRUD_TIPO_ARTICULO} from '../../system/generic/classes/ContanteTransaccional';
import {ArticuloSegmento} from '../classes/articulo-segmento';

@Injectable({
  providedIn: 'root'
})
export class ArticuloSegmentoClientService {

  constructor(private genericService: ExecuteCallProcedureService) { }


  async registarTipoArticuloSegmento(articuloSegmento: ArticuloSegmento) {
    const requestOptions = new RequestOptions();
    return <TipoArticulo> await this.genericService.ejecucionGenerica(articuloSegmento, PROC_XML_CRUD_ARTICULO_SEGMENTO, requestOptions);
  }


}
