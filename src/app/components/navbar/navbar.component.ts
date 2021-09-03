import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('menuTop') menuTop: ElementRef | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  scrollToMenuTop() {
    setTimeout(() => {
      if (this.menuTop !== undefined) {
        this.menuTop.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 250);
  }

  displayNavbarSpacer() {
    return this.router.url !== '/';
  }
}
