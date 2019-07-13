import {Injectable} from '@angular/core';
import {RequestDto} from '../classes/request-dto';
import {URL_SERVICIOS} from '../classes/constant';
import {Builder} from 'xml2js';
import {HttpClient} from '@angular/common/http';
import {Util} from '../classes/util';

@Injectable({
    providedIn: 'root'
})
export class RestConectionService {

    constructor(private  http: HttpClient, private utilitario: Util) {
    }


    public procConsultaGenerica = function(genericObject: any, nombreSP: string, urlRestService: string) {
        const data = this.utilitario.toXML(genericObject)
        const obj = new RequestDto();
        obj.valorXml = data;
        obj.storeProcedure = nombreSP;
        const url = URL_SERVICIOS + '/' + urlRestService;
        return this.http.put(url, obj);
    };

    public procEjecucionGenerica = function(genericObject: any, nombreSP: string, urlRestService: string) {
        const data = this.utilitario.toXML(genericObject);
        const obj = new RequestDto();
        obj.valorXml = data;
        console.log('xml generado: ' + data);
        obj.storeProcedure = nombreSP;
        const url = URL_SERVICIOS + '/' + urlRestService;
        return this.http.post(url, obj);
    };

}