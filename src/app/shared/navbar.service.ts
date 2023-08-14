import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  visible: boolean;
  headername: any = "";
  isUser: any = "false";
  isLogoutButton: any = "false"
  public UserName: any;
  constructor() {
    this.visible = true;
  }
  hide() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }

  toggle() {
    this.visible = !this.visible;
  }

}
