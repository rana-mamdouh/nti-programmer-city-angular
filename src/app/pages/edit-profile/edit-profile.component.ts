import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  img: any = null
  errorMsg: any = false
  userData: any
  userImage: any = ''
  constructor(private global: GlobalService, private toastr: ToastrService, private router: Router, private sanitizer: DomSanitizer) { }
  editForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    name: new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),

    }),
  })
  passwordForm = new FormGroup({
    password: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),

  })

  get editData() {
    return this.editForm.controls
  }
  get passwordData() {
    return this.passwordForm.controls
  }
  ngOnInit(): void {
    this.global.showUser().subscribe(res => {
      this.userData = res.data
    }, (err) => {
      this.errorMsg = true
    }, () => {
    })

  }

  handleEditSubmit() {
    this.global.editProfile(this.editForm.value).subscribe(res => {
      location.reload()
    }, (err) => {
      console.log(err)
      this.errorMsg = true
    }, () => {
    })
  }

  handlePasswordSubmit() {
    this.global.changePassword(this.passwordForm.value).subscribe(res => {
      this.toastr.success("Updated Successfully", "Password Changed")

    }, (err) => {
      this.errorMsg = true
    }, () => {
    })
  }
}
