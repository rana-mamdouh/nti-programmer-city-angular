import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  posts: any
  errorMsg: any
  constructor(public global: GlobalService) { }

  ngOnInit(): void {
    this.global.showMyPost().subscribe(res => {
      this.posts = res.data
      console.log(this.posts)
    })
  }

  deletePost(id: any) {
    this.global.deletePost(id).subscribe(res => {
      console.log(res)
      location.reload();
    }, (err) => {
      this.errorMsg = true
    }, () => {

    })
  }
}
