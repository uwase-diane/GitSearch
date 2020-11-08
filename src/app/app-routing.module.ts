import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'repo-details', component: RepoDetailsComponent},
  {path:'', redirectTo:"/user", pathMatch:"full"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
