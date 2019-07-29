import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'signin', loadChildren: './modules/security/pages/login/signin/signin.module#SigninPageModule' },
  { path: 'register', loadChildren: './modules/security/pages/register/register.module#RegisterPageModule' },
  { path: 'password', loadChildren: './modules/security/pages/login/password/password.module#PasswordPageModule' },
  { path: 'mant-licor', loadChildren: './modules/mensajeria/pages/mant-licor/mant-licor.module#MantLicorPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
