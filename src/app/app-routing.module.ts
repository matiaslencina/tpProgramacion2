import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioNoRegistradoComponent } from './componentes/inicio-no-registrado/inicio-no-registrado.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path: 'home-login', component:InicioNoRegistradoComponent},  
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo:'home-login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
