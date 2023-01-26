import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './guard/route-guard.guard';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {
   path: '',
   redirectTo: 'login',
   pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [RouteGuard]

  },
  {
    path: 'register',
    component: LoginComponent,
    canActivate: [RouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
