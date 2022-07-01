import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  errorMsg: boolean = false
  userName: any
  posts: any[] = []
  p: number = 1
  value: any 
  constructor(public global: GlobalService,private activated: ActivatedRoute,) { }

  ngOnInit(): void {
    this.value = this.activated.snapshot.paramMap.get("q")
    this.global.showPosts().subscribe(res => {
      this.posts = res.data
      this.handleInput()
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
  filteredPosts: any[] = this.posts

  handleInput() {
    this.filteredPosts = this.posts.filter((post) => {
      return post.content.includes(this.value
        || post.title.includes(this.value)
      )
    })

    if (this.value == '')
      this.filteredPosts = this.posts
  }
}
