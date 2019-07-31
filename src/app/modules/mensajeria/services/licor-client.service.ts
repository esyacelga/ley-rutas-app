import {Injectable} from '@angular/core';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {PROC_XML_CONSULTAS_APP} from '../../system/generic/classes/constant';
import {Licor} from '../classes/Licor';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {TipoLicor} from '../classes/TipoLicor';

@Injectable({
    providedIn: 'root'
})
export class LicorClientService {

    constructor(private genericService: ExecuteCallProcedureService) {
    }

    async registarlicor(liscor: Licor) {
        const requestOptions = new RequestOptions();
        liscor.opcionBase = 'REGISTRARLICOR';
        return <Licor> await this.genericService.getGenericObjects(liscor, PROC_XML_CONSULTAS_APP, requestOptions);
    }

    async obtenerTipoLicor() {
        const requestOptions = new RequestOptions();
        const obj = {
            datoPrueba: '001',
            opcionBase: 'TIPOLECTOR'
        };
        return <TipoLicor> await this.genericService.getGenericObjects(obj, PROC_XML_CONSULTAS_APP, requestOptions);
    }


}
