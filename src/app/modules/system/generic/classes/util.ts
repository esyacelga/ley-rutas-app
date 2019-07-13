import {Builder} from 'xml2js';
import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class Util {

    public toXML = function(json: any) {
        const builder = new Builder();
        return builder.buildObject(json);
    };

    modificarValoresBooleanos = function (lista, campo) {
        if (lista) {
            if (lista) {
                for (let i = 0; i < lista.length; i++) {
                    const valores = lista[i];
                    for (const aux in valores) {
                        if (aux === campo) {
                            lista[i][aux] = this.toBoolean(lista[i][aux]);
                        }
                    }

                }
            }
        }
        return lista;

    };

    private xmlToJsonFormat = function(xml) {
        const data = this.xmlToJson(xml);
        if (!data.root) {
            return null;
        }

        if (data.root.entidad.length) {
            return data;
        } else {
            const dato = data.root.entidad;
            data.root.entidad = [];
            data.root.entidad.push(dato);
            return data;
        }
    };

    entidadDesdeXML = function(data) {
        if (!data || data == null) {
            return null;
        }
        const parseXml = this.parseXml(data);
        const obj = this.xmlToJson(parseXml);
        if (!obj && !obj.root && !obj.root.entidad && !obj.root.entidad.row) {
            return null;
        }
        return obj.root.entidad.row;
    };

    public listaDesdeXML = function(data) {
        const parseXml = this.parseXml(data);
        const obj = this.xmlToJsonFormat(parseXml);
        if (!obj) {
            return null;
        }
        return this.formatearListaXml(obj.root.entidad);
    };

    private xmlToJson = function(xml) {
        // Create the return object
        let obj = {};

        if (xml.nodeType === 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
                obj['row'] = {};
                for (let j = 0; j < xml.attributes.length; j++) {
                    const attribute = xml.attributes.item(j);
                    obj['row'][attribute.nodeName.replace('_x0020_', ' ')] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType === 3) { // text
            obj = xml.nodeValue;
        }

        // do children
        if (xml.hasChildNodes()) {
            for (let i = 0; i < xml.childNodes.length; i++) {
                const item = xml.childNodes.item(i);
                const nodeName = item.nodeName;
                if (typeof (obj[nodeName]) === 'undefined') {
                    obj[nodeName] = this.xmlToJson(item);
                } else {
                    if (typeof (obj[nodeName].push) === 'undefined') {
                        const old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(this.xmlToJson(item));
                }
            }
        }
        return obj;
    };


}

