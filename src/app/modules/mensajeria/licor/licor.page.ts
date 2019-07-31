import {Component, OnInit} from '@angular/core';
import {ImagePickerOptions} from '@ionic-native/image-picker';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {Licor} from '../classes/Licor';
import {LicorClientService} from '../services/licor-client.service';
import {TipoLicor} from '../classes/TipoLicor';

@Component({
    selector: 'app-licor',
    templateUrl: './licor.page.html',
    styleUrls: ['./licor.page.scss'],
})
export class LicorPage implements OnInit {

    lstTipoLicor: Array<TipoLicor> = [];
    objLicor: Licor = new Licor();
    imagenPreview = '';
    imagen64: string;

    constructor(private imagePicker: ImagePicker, private camera: Camera, private clienteLicor: LicorClientService) {

    }

    async obtenerTipoLicor() {
        // @ts-ignore
        this.lstTipoLicor = await this.clienteLicor.obtenerTipoLicor();
        console.log(this.lstTipoLicor);
    }


    async registrar(obj: Licor) {
        // @ts-ignore
        const data: Licor;
        // @ts-ignore
        data = await this.clienteLicor.registarlicor(obj);
        console.log(data);

    }

    ngOnInit() {
        this.obtenerTipoLicor();
    }


    capturarImagen() {
        const options: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
            this.imagen64 = imageData;
            this.objLicor.foto = imageData;

        }, (err) => {
            // Handle error
            console.log('ERROR EN CAMARA', JSON.stringify(err));
        });
    }

    seleccionarImagen() {
        const opciones: ImagePickerOptions = {
            quality: 70,
            outputType: 1,
            maximumImagesCount: 1
        };


        this.imagePicker.getPictures(opciones).then((results) => {
            for (let i = 0; i < results.length; i++) {
                // console.log('Image URI: ' + results[i]);
                this.imagenPreview = 'data:image/jpeg;base64,' + results[i];
                this.imagen64 = results[i];
                this.objLicor.foto = results[i];
            }

        }, (err) => {
            console.log('ERROR en selector', JSON.stringify(err));
        });


    }


}
