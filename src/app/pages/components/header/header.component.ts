import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { PagesService } from '../../services/pages.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private pagesService: PagesService) {}

  ngOnInit() {}

  toggleSidebar() {
    this.pagesService.toggleSidebar()
  }

  logout() {
    sessionStorage.removeItem('isLoggedin')
    this.router.navigate(['/login'])
  }
}
