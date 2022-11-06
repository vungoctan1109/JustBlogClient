import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import AppComponent from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PostComponent } from './admin/post/post.component';
import { TagComponent } from './admin/tag/tag.component';
import { CategoryComponent } from './admin/category/category.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './client/home/home.component';
import { ListPostComponent } from './client/list-post/list-post.component';
import { DetailsPostComponent } from './client/details-post/details-post.component';
import { CategoryPostComponent } from './client/category-post/category-post.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    AuthenticationComponent,
    PostComponent,
    TagComponent,
    CategoryComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ListPostComponent,
    DetailsPostComponent,
    CategoryPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
