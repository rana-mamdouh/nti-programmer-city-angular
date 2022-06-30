import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  url = "http://localhost:3000"
  public isLogin: boolean = false
  public UserData: any


  constructor(private http: HttpClient) { }

  register(obj: any): Observable<any> {
    return this.http.post(`${this.url}/user/register`, obj)
  }

  login(obj: any): Observable<any> {
    return this.http.post(`${this.url}/user/login`, obj)
  }

  showUser(): Observable<any> {
    return this.http.get(`${this.url}/user/show`)
  }

  showUserById(id: any): Observable<any> {
    return this.http.get(`${this.url}/user/showUser/${id}`)
  }

  editProfileImage(obj: any): Observable<any> {
    return this.http.patch(`${this.url}/user/uploadPhoto`, obj)
  }

  showProfileImage(): Observable<any> {
    return this.http.get(`${this.url}/user/sendPhoto`)
  }

  editProfile(obj: any): Observable<any> {
    return this.http.patch(`${this.url}/user/update`, obj)
  }

  changePassword(obj: any): Observable<any> {
    return this.http.patch(`${this.url}/user/changePassword`, obj)
  }

  showPosts(): Observable<any> {
    return this.http.get(`${this.url}/post/allPosts`)
  }

  showSinglePost(id: any): Observable<any> {
    return this.http.get(`${this.url}/post/singlePost/${id}`)
  }

  showMyPost(): Observable<any> {
    return this.http.get(`${this.url}/post/myPosts`)
  }

  showPostComments(id: any): Observable<any> {
    return this.http.get(`${this.url}/comment/allComments/${id}`)
  }

  deletePost(id: any): Observable<any> {
    return this.http.delete(`${this.url}/post/delete/${id}`)
  }

  addPost(obj: any): Observable<any> {
    return this.http.post(`${this.url}/post/add`, obj)
  }

  editPost(id: any, obj: any): Observable<any> {
    return this.http.patch(`${this.url}/post/update/${id}`, obj)
  }

  addComment(id: any, obj: any): Observable<any> {
    return this.http.post(`${this.url}/comment/add/${id}`, obj)
  }

  deleteComment(id: any): Observable<any> {
    return this.http.delete(`${this.url}/comment/delete/${id}`)
  }

  editComment(id: any, obj: any): Observable<any> {
    return this.http.patch(`${this.url}/comment/update/${id}`, obj)
  }
}
