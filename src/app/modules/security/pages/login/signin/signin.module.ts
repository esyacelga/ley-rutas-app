import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SigninPage} from './signin.page';
import {RestConectionModule} from '../../../../system/generic/rest-conection/rest-conection.module';

const routes: Routes = [
    {
        path: '',
        component: SigninPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RestConectionModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SigninPage]
})
export class SigninPageModule {
}
