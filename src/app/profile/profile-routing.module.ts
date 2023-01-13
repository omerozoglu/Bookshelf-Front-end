import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCanActivateGuard } from '../_guards/auth-can-activate.guard';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: 'profile', title: 'Profile', component: ProfileComponent, canActivate: [AuthCanActivateGuard], children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
