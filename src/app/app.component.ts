import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Programmer City';
  constructor(private global : GlobalService){
    if(localStorage.getItem("token")) this.global.isLogin = true
  }
  
}
