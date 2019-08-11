import {Component, OnInit} from '@angular/core';
import {Camera} from '@ionic-native/camera/ngx';
import {ArticuloService} from '../../modules/mensajeria/services/articulo.service';
import {CameraOptions} from '@ionic-native/camera';
declare var window: any;
@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    tempImages: string[] = [];
    constructor(private camera: Camera, private svrArticulo: ArticuloService) {
    }

    ngOnInit() {
    }

    camara() {

        const options: CameraOptions = {
            quality: 60,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        };

        this.procesarImagen(options);

    }

    libreria() {

        const options: CameraOptions = {
            quality: 60,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };

        this.procesarImagen( options );

    }


    procesarImagen(options: CameraOptions) {

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):

            const img = window.Ionic.WebView.convertFileSrc(imageData);

            this.svrArticulo.subirImagen(imageData);
            this.tempImages.push(img);

        }, (err) => {
            // Handle error
        });
    }
}
