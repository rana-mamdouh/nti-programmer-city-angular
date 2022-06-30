import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { PostsComponent } from './pages/posts/posts.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './compnents/card/card.component';
import { FormComponent } from './compnents/form/form.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowProfileComponent } from './pages/show-profile/show-profile.component';
import { MyPostsComponent } from './pages/my-posts/my-posts.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { EditProfileImageComponent } from './pages/edit-profile-image/edit-profile-image.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    PostsComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent,
    CardComponent,
    FormComponent,
    SinglePostComponent,
    EditProfileComponent,
    ShowProfileComponent,
    MyPostsComponent,
    EditProfileImageComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
