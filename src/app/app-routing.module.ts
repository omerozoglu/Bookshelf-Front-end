import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeRoutingModule } from './pages/home/home-routing.module';

import { ProfileRoutingModule } from './pages/profile/profile-routing.module';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    HomeRoutingModule,
    ProfileRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
