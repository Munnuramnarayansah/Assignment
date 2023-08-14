import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emailVerificationMessage: boolean = false;

  constructor(private _router: Router, public nav: NavbarService) { }
  ngOnInit(): void {
    this.onSubmit;
    this.nav.hide();
  }

  onSubmit(form: NgForm) {
    const email = form.value.user;
    const password = form.value.pswd;
    this.nav.UserName=email;
    console.log(email);
    if ((email === "User1" || email=== "User2" || email==="User3") && password==="User123") {
      this._router.navigateByUrl('/menuPage');
    }
    else {
      this.emailVerificationMessage = true
    }
  }
}
