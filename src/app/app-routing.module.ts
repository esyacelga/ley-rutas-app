import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    //{path: '', pathMatch: 'full', redirectTo: 'signin'},
    {path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
    {path: 'signin', loadChildren: './modules/security/pages/login/signin/signin.module#SigninPageModule'},
    {path: 'register', loadChildren: './modules/security/pages/register/register.module#RegisterPageModule'},
    {path: 'password', loadChildren: './modules/security/pages/login/password/password.module#PasswordPageModule'},
    {path: 'licor', loadChildren: './modules/mensajeria/licor/licor.module#LicorPageModule'},
    {
        path: 'mant-tipo-articulo',
        loadChildren: './modules/mensajeria/pages/mant-tipo-articulo/mant-tipo-articulo.module#MantTipoArticuloPageModule'
    },
    {
        path: 'mant-tipo-articulo-segmento',
        loadChildren: './modules/mensajeria/pages/mant-tipo-articulo-segmento/mant-tipo-articulo-segmento.module#MantTipoArticuloSegmentoPageModule'
    },
    {path: 'mant-articulo', loadChildren: './modules/mensajeria/pages/mant-articulo/mant-articulo.module#MantArticuloPageModule'}


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
