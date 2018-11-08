import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistroComponent } from './components/user/registro/registro.component';
import { ProfileComponent } from './components/user/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'navegacion', component: NavegacionComponent},
  { path: 'user/registro', component: RegistroComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
