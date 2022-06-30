import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isSubmitted: boolean = false
  errorMsg: boolean = false
  postForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required])
  })

  get postData() {
    return this.postForm.controls
  }

  constructor(private global: GlobalService, private router: Router) {
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.isSubmitted = true
    if (!this.global.isLogin) {
      this.router.navigateByUrl("login")
    }
    else {
      this.global.addPost(this.postForm.value).subscribe(res => {
        console.log(res)
        this.router.navigateByUrl("posts")
    }, (err) => {
      this.errorMsg = true
    }, () => {

    })
  }
}

}
