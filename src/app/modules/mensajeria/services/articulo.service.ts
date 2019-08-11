import {Injectable} from '@angular/core';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {URL_PAGINAR_ARTICULO} from '../../system/generic/classes/UrlPostRestService';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {environment} from '../../../../environments/environment';

const URL = environment.url;

@Injectable({
    providedIn: 'root'
})
export class ArticuloService {
    paginaPost = 0;

    constructor(private genericService: ExecuteCallProcedureService, private fileTransfer: FileTransfer) {
    }

    subirImagen( img: string ) {
        const options: FileUploadOptions = {
            fileKey: 'image'
        };
        const fileTransfer: FileTransferObject = this.fileTransfer.create();
        fileTransfer.upload( img, `${ URL }/posts/upload`, options )
            .then( data => {
                console.log(data);
            }).catch( err => {
            console.log('error en carga', err);
        });

    }
    async obtenerArticuloPaginado(pull: boolean) {
        const requestOptions = new RequestOptions();
        requestOptions.responseType = 1;
        if (pull) {
            this.paginaPost = 0;
        }

        this.paginaPost++;


        const obj = {
            pagina: this.paginaPost,
            value: 0
        };
        return await this.genericService.servicioRestGenericoGet(obj, URL_PAGINAR_ARTICULO, requestOptions);
    }
}
