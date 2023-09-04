import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: '', component: MainComponent},
  {path: 'posts', component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
