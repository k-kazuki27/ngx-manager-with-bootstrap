import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-bs-component',
  templateUrl: './bs-component.component.html',
  styleUrls: ['./bs-component.component.scss']
})
export class BsComponentComponent implements OnInit {
  form!: FormGroup
  form1!: FormGroup

  people: any[] = [
    { id: 1, name: '田中太郎' },
    { id: 2, name: '山本一郎' },
    { id: 3, name: '近藤良太' }
  ]
  selectedPeople = []
  selectedPeople2 = []

  selected?: string
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ]

  vsHeaders: any[] = [
    {
      name: 'No'
    },
    {
      name: '詳細'
    },
    {
      name: '登録日時'
    }
  ]

  vsItems: any[] = []

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      hoge: [null, []],
      test: []
    })

    this.form1 = this.fb.group({
      image: [null, []]
    })

    for (let i = 1; i <= 100; i++) {
      this.vsItems.push({
        detail: '詳細' + i,
        createdAt: '2019/01/01 10:00'
      })
    }
  }

  get image(): FormControl {
    return this.form1.get('image') as FormControl
  }
}
