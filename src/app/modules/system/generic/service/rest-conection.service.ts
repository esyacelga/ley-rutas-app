import {Injectable} from '@angular/core';
import {RequestDto} from '../classes/request-dto';
import {HttpClient} from '@angular/common/http';
import {Util} from '../classes/util';
import {environment} from '../../../../../environments/environment';

const ROOT_URL = environment.url;

@Injectable({
    providedIn: 'root'
})
export class RestConectionService {

    constructor(private  http: HttpClient, private utilitario: Util) {
    }


    public procConsultaGenerica = function(genericObject: any, nombreSP: string, urlRestService: string) {
        const data = this.utilitario.toXML(genericObject);
        const obj = new RequestDto();
        obj.valorXml = data;
        obj.storeProcedure = nombreSP;
        const url = ROOT_URL + '/' + urlRestService;
        return this.http.put(url, obj);
    };

    public procEjecucionGenerica = function(genericObject: any, nombreSP: string, urlRestService: string) {
        const data = this.utilitario.toXML(genericObject);
        const obj = new RequestDto();
        obj.valorXml = data;
        console.log('xml generado: ' + data);
        obj.storeProcedure = nombreSP;
        const url = ROOT_URL + '/' + urlRestService;
        return this.http.post(url, obj);
    };


    public genericGetRestFull = function(genericObject: any, genericGetRestFull: string) {
        const url = ROOT_URL + '/' + genericGetRestFull;
        return this.http.put(url, genericObject);
    };


    public genericPostRestFull = function(genericObject: any, urlRestService: string) {
        const url = ROOT_URL + '/' + urlRestService;
        return this.http.post(url, genericObject);
    };

    public genericPutRestFull = function(genericObject: any, urlRestService: string) {
        const url = ROOT_URL + '/' + urlRestService;
        return this.http.put(url, genericObject);
    };

}
