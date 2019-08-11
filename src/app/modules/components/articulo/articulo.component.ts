import {Component, Input, OnInit} from '@angular/core';
import {Articulo} from '../../mensajeria/classes/Articulo';

@Component({
    selector: 'app-articulo',
    templateUrl: './articulo.component.html',
    styleUrls: ['./articulo.component.scss'],
})
export class ArticuloComponent implements OnInit {

    @Input() articulo: Articulo = new Articulo();

    constructor() {
    }

    ngOnInit() {
    }

}
