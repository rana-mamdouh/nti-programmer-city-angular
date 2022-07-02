import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean = false
  errorMsg: boolean = false
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })

  get loginData() { 
    return this.loginForm.controls 
  }

  constructor(private global: GlobalService, private router: Router) {
    // if (localStorage.getItem('token')) this.router.navigate([""])
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.isSubmitted = true
    if (this.loginForm.valid) {
      this.global.login(this.loginForm.value).subscribe(res => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token)
          this.global.isLogin = true
          this.router.navigateByUrl("")
        }

      }, (err) => {
        this.errorMsg = true
      }, () => {

      })
    }
  }
}
