import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLogin: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    if(tabChangeEvent.index){
      this.isLogin = false;
    }else{
      this.isLogin = true;
    }
  }

}
