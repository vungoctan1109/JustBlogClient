import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component'
import { CategoryComponent } from './admin/category/category.component';
import { PostComponent } from './admin/post/post.component';
import { TagComponent } from './admin/tag/tag.component';

import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { CategoryPostComponent } from './client/category-post/category-post.component';
import { DetailsPostComponent } from './client/details-post/details-post.component';
import { ListPostComponent } from './client/list-post/list-post.component';

import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';


const routes: Routes = [
  { 
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'category', component: CategoryComponent },
      { path: 'post', component: PostComponent },
      { path: 'tag', component: TagComponent },
    ]
  },

  {
    path: '',
    component: ClientComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: "posts", component: ListPostComponent },
      { path: "posts/:id", component: DetailsPostComponent },
      { path: 'category/:name', component: CategoryPostComponent }  
    ]
  },

  { 
    path: "authentication", component: AuthenticationComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

