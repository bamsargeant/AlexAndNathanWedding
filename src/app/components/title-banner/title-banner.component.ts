import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-banner',
  templateUrl: './title-banner.component.html',
  styleUrls: ['./title-banner.component.sass']
})
export class TitleBannerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isCollapsed() {
    return this.router.url !== '/';
  }

}
