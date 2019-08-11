import {Injectable} from '@angular/core';
import {ExecuteCallProcedureService} from '../../modules/system/generic/service/execute-call-procedure.service';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    paginaPost = 0;

    constructor(private genericService: ExecuteCallProcedureService) {

    }


}
