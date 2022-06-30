import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
  user: any
  constructor(public global: GlobalService, private route: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.global.showUser().subscribe(res => {
      this.user = res.data
    })
  }
  sanitizeImageUrl(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`http://localhost:3000/user/sendPhoto/${this.user?.image?.replace('images\\', '')}`);
  }


}
