import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  id: any
  singlePost: any
  user: any
  comments: any
  userComment: any
  comment: any
  commentModel: any
  
  constructor(private activated: ActivatedRoute, public global: GlobalService, private router: Router) {
    this.id = activated.snapshot.paramMap.get("id")
    this.global.showSinglePost(this.id).subscribe(data => {
      this.singlePost = data
      this.global.showUserById(this.singlePost.data.userId).subscribe(data => {
        this.user = data
      })
      this.global.showPostComments(this.id).subscribe(data => {
        this.comments = data
      })
    })

  }
  ngOnInit(): void {
  }
  isSubmitted: boolean = false
  errorMsg: boolean = false
  edit: any
  commentForm = new FormGroup({
    content: new FormControl("", [Validators.required])
  })

  get commentData() {
    return this.commentForm.controls
  }


  handleSubmit() {
    this.isSubmitted = true
    if (!this.global.isLogin) {
      this.router.navigateByUrl("login")
    }
    else {
      this.global.addComment(this.id, {
        ...this.commentForm.value,
        userId: this.global.UserData._id
      }).subscribe(res => {
        location.reload();
      }, (err) => {
        this.errorMsg = true
      }, () => {

      })
    }
  }

  deleteComment(id: any) {
    this.global.deleteComment(id).subscribe(res => {
      console.log(res)
      location.reload();
    }, (err) => {
      this.errorMsg = true
    }, () => {

    })
  }

  editComment(comment: any) {
    this.edit = comment._id
    this.commentModel = comment.content
  }

  handleEditSubmit(id: any, content: any) {
    this.global.editComment(id, { "content": content.value }).subscribe(res => {
      console.log(res)
      location.reload()
    }, (err) => {
      this.errorMsg = true
      console.log(err)
    }, () => {

    })
  }

  getCommentUser(id: any) {
    this.global.showUserById(id).subscribe(res => {
      this.userComment = res.data
    }, (err) => {
      this.errorMsg = true
      console.log(err)
    }, () => {

    })
  }
}

