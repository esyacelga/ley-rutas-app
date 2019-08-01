import { Injectable } from '@angular/core';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';

@Injectable({
  providedIn: 'root'
})
export class ArticuloSegmentoClientService {

  constructor(private genericService: ExecuteCallProcedureService) { }
}
