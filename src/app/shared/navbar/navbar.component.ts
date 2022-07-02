import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: any
  posts: any[] = []
  constructor(public global: GlobalService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.global.showUser().subscribe(res => {
      this.userName = res.data.name.firstName
      this.global.UserData = res.data
    })

    this.global.showPosts().subscribe(res => {
      this.posts = res.data
    })
  }

  handleLogOut() {
    localStorage.removeItem("token")
    this.global.isLogin = false
    this.router.navigate(["/"])
    this.global.UserData = null
  }
  filteredPosts: any[] = this.posts
  q: any
  handleInput() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([`/search-post/${this.q}`]))
  }
  sanitizeImageUrl(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`http://localhost:3000/user/sendPhoto/${this.global?.UserData?.image?.replace('images\\', '')}`);
  }
}
