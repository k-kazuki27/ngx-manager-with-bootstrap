import { Component, OnInit } from '@angular/core'
import { routerTransition } from 'src/app/router.animations'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [routerTransition()]
})
export class UserListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
