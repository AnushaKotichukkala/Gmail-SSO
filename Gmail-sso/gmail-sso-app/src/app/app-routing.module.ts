import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'userDetails', component: UserDetailsComponent },
{ path: 'invalid', component: InvalidComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
