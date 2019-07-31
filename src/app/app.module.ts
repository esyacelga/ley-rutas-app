import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import {RestConectionModule} from './modules/system/generic/rest-conection/rest-conection.module';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RestConectionModule],
    providers: [
        StatusBar,
        Camera,
        SplashScreen,
        ImagePicker,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {


}
