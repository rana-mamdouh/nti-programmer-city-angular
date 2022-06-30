import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-profile-image',
  templateUrl: './edit-profile-image.component.html',
  styleUrls: ['./edit-profile-image.component.css']
})
export class EditProfileImageComponent implements OnInit {

  img: any = null
  errorMsg: any = false
  userData: any
  userImage: any = ''
  constructor(private global: GlobalService, private toastr: ToastrService, private router: Router, private sanitizer: DomSanitizer) {
    
  }


  ngOnInit(): void {
    this.global.showUser().subscribe(res => {
      this.userData = res.data
    }, (err) => {
      this.errorMsg = true
    }, () => {
    })

  }

  handleChange(eve: any) {
    this.img = eve.target.files
  }

  sanitizeImageUrl(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`http://localhost:3000/user/sendPhoto/${this.userData?.image?.replace('images\\', '')}`);
  }

  handleSubmit() {
    if (this.img != null) {
      let formData = new FormData()
      formData.append("profile", this.img[0])
      this.global.editProfileImage(formData).subscribe(res => {
        this.toastr.success("Added Successfully", "Image Uploaded")
        location.reload()
      }, (err) => {
        console.log(err)
        this.errorMsg = true
      }, () => {
      })
    }
  }

}
