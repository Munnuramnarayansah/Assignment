import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  headername: any = "Munnu";
  isUser: any = false;
  isLogoutButton: any = false

  constructor() { }

  ngOnInit(): void {
    console.log("t", this.headername)
    console.log("isUser", this.isUser)
    console.log("isLogoutButton", this.isLogoutButton)
  }

}
