import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any
  errorMsg: any
  p: number = 1;
  
  constructor(public global: GlobalService) { }

  ngOnInit(): void {
    this.global.showPosts().subscribe(res => {
      this.posts = res.data
    })
  }

  deletePost(id: any) {
    this.global.deletePost(id).subscribe(res => {
      location.reload();
    }, (err) => {
      this.errorMsg = true
    }, () => {

    })
  }
}
