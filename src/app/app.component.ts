import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavbarService } from './shared/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TCD';
  isLogin: boolean;
  constructor(private router: Router, public nav: NavbarService ) {
    this.router.events.subscribe((event: any) => {
      event instanceof NavigationEnd
        ? event.url === '/login'
          ? this.nav.hide()
          : this.nav.show()
        : null;
    });
  }
}
