import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { EditProfileImageComponent } from './pages/edit-profile-image/edit-profile-image.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { MyPostsComponent } from './pages/my-posts/my-posts.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ShowProfileComponent } from './pages/show-profile/show-profile.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';

const routes: Routes = [
  {path :"" , component : IndexComponent },
  {path:"posts" , component:PostsComponent},
  {path :"post/:id" , component : SinglePostComponent },
  {path :"login" , component : LoginComponent },
  {path :"sign-up" , component : SignUpComponent },
  {path :"edit-profile" , component : EditProfileComponent },
  {path :"edit-profile-image" , component : EditProfileImageComponent },
  {path :"show-profile" , component : ShowProfileComponent },
  {path :"my-posts" , component : MyPostsComponent },
  {path :"edit-post/:id" , component : EditPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
