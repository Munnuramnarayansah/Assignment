import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class Menu implements OnInit {

  public getSelectedEntityItem: any;
  constructor( private navbarservice: NavbarService) { }
  public UserName:any;

  ngOnInit(): void {
  this.UserName=this.navbarservice.UserName;
  this.navbarservice.UserName=this.UserName;
  }

}
