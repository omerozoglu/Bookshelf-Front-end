import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCanActivateGuard } from '../_guards/auth-can-activate.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "home", title: 'Bookshelf', component: HomeComponent, canActivate: [AuthCanActivateGuard], children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
