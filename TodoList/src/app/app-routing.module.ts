import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'login', loadChildren:  () => import('./login/login.module').then(m => m.LoginModule)},
	{ path: 'home', loadChildren: () => import('./home/home.module').then(m=> m.HomeModule)},
	{ path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: false })],
	exports: [RouterModule],
})
export class AppRoutingModule { }
