import {Component, OnInit} from '@angular/core';
import {TipoArticulo} from '../../classes/tipo-articulo';
import {TipoArticuloClientService} from '../../services/tipo-articulo-client.service';

@Component({
    selector: 'app-mant-tipo-articulo',
    templateUrl: './mant-tipo-articulo.page.html',
    styleUrls: ['./mant-tipo-articulo.page.scss'],
})
export class MantTipoArticuloPage implements OnInit {
    objTipoArticulo: TipoArticulo;
    lstTipoArticulos: Array<TipoArticulo>;

    constructor(private srvTipoArticulo: TipoArticuloClientService) {

    }


    crearNuevo() {
        this.objTipoArticulo = new TipoArticulo();
    }

    async obtnerTipoArticulo() {
        // @ts-ignore
        this.lstTipoArticulos = await this.srvTipoArticulo.obtenerTipoArticulos();
        console.log(this.lstTipoArticulos);
    }

    ngOnInit() {
        this.obtnerTipoArticulo();
    }

    async eliminarTipoArticulo(objTipoArticulo: TipoArticulo) {
        objTipoArticulo.estado = 0;
        await this.srvTipoArticulo.registarTipoArticulo(objTipoArticulo);
        await this.obtnerTipoArticulo();
    }

    async registrarTipoArticulo(objTipoArticulo: TipoArticulo) {
        objTipoArticulo.estado = 1;
        await this.srvTipoArticulo.registarTipoArticulo(objTipoArticulo);
        await this.obtnerTipoArticulo();
        this.objTipoArticulo = null;
        //this.obtnerTipoArticulo();
    }


}
