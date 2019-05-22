import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-bs-component',
  templateUrl: './bs-component.component.html',
  styleUrls: ['./bs-component.component.scss']
})
export class BsComponentComponent implements OnInit {
  people: any[] = [
    { id: 1, name: '田中太郎' },
    { id: 2, name: '山本一郎' },
    { id: 3, name: '近藤良太' }
  ]
  selectedPeople = []
  selectedPeople2 = []

  constructor() {}

  ngOnInit() {}
}
