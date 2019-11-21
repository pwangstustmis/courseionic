import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ionichome', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'ionichome', loadChildren: './courseionic/home/home.module#HomePageModule' },
  { path: 'flutterhome', loadChildren: './courseflutter/home/home.module#HomePageModule' },
  { path: 'installionic', loadChildren: './courseionic/installionic/installionic.module#InstallionicPageModule' },
  { path: 'projstruct', loadChildren: './courseionic/projstruct/projstruct.module#ProjstructPageModule' },
  { path: 'pagedesign', loadChildren: './courseionic/pagedesign/pagedesign.module#PagedesignPageModule' },
  { path: 'uicomponents', loadChildren: './courseionic/uicomponents/uicomponents.module#UicomponentsPageModule' },
  { path: 'uilayout', loadChildren: './courseionic/uilayout/uilayout.module#UilayoutPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
