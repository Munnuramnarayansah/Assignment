import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Menu } from './menu/menu.component';
import { LandingPageComponent } from './LandingPage/landingPage.component';

const routes: Routes = [
{ path: 'loginPage', component: LoginComponent },
{ path: '', component: LoginComponent },

{
  path: 'menuPage',
  component: Menu,
},

{
  path: 'landingPage',
  component: LandingPageComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
