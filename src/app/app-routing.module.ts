import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/users/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/Admin/admin.module').then(m => m.AdminModule),
  },
  { path: 'login', component: LoginComponent },
  {
    path:'user',
    loadChildren:() => import('./pages/users/users.module').then(m => m.UsersModule) 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
