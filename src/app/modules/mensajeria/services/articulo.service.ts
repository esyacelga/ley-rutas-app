import {Injectable} from '@angular/core';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {URL_PAGINAR_ARTICULO} from '../../system/generic/classes/UrlPostRestService';

@Injectable({
    providedIn: 'root'
})
export class ArticuloService {
    paginaPost = 0;

    constructor(private genericService: ExecuteCallProcedureService) {
    }

    async obtenerArticulos() {
        const requestOptions = new RequestOptions();
        this.paginaPost++;
        const obj = {
            pagina: this.paginaPost,
            value: 0
        };
        return await this.genericService.servicioRestGenericoGet(obj, URL_PAGINAR_ARTICULO, requestOptions);
    }
}
