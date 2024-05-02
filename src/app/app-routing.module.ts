import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterProtectGuard } from './guards/Admin/admin.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OverwiewComponent } from './components/pages/overwiew/overwiew.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ConiformPasswordComponent } from './components/coniform-password/coniform-password.component';

const routes: Routes = [
  { path: 'login', title: 'Login', component: RegisterComponent},
  { path: 'login', title: 'Login', component: RegisterComponent},
  { path: 'overview', title: 'OverView', component: OverwiewComponent},
  { path: 'forgot-password', title: 'ForgotPassword', component: ForgotPasswordComponent},
  { path: 'coniform-password', title: 'ConiformPassword', component: ConiformPasswordComponent},
  { path: '', title: 'OverView', component: OverwiewComponent},
  { path: '**', title: 'Not Found', component: NotFoundComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

