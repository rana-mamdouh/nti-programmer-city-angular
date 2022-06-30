import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  id: any
  singlePost: any
  errorMsg: boolean = false
  postForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required])
  })

  get postData() {
    return this.postForm.controls
  }

  constructor(private activated: ActivatedRoute, private global: GlobalService, private router: Router) {
    this.id = activated.snapshot.paramMap.get("id")
    this.global.showSinglePost(this.id).subscribe(data => {
      this.singlePost = data.data
    })
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.global.editPost(this.id, this.postForm.value).subscribe(res => {
      this.router.navigateByUrl("posts")
    }, (err) => {
      this.errorMsg = true
    }, () => {

    })
  }

}
