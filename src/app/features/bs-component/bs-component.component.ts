import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Image } from 'src/app/shared'

@Component({
  selector: 'app-bs-component',
  templateUrl: './bs-component.component.html',
  styleUrls: ['./bs-component.component.scss']
})
export class BsComponentComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  get image(): FormControl {
    return this.form1.get('image') as FormControl
  }
  get date01(): FormControl {
    return this.form2.get('date01') as FormControl
  }
  form!: FormGroup
  form1!: FormGroup
  form2!: FormGroup

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

  ngOnInit() {
    this.form = this.fb.group({
      hoge: [null, []],
      test: []
    })

    const src =
      'https://media.gettyimages.com/photos/caffee-on-table-and-blured-cafe-picture-id652628318'

    const image: Image = { name: 'test', src }
    this.form1 = this.fb.group({
      image: [image, [Validators.required]]
    })

    this.form2 = this.fb.group({
      date01: [null, [Validators.required]]
    })

    for (let i = 1; i <= 100; i++) {
      this.vsItems.push({
        detail: '詳細' + i,
        createdAt: '2019/01/01 10:00'
      })
    }
  }
  onSelect(disable: boolean) {
    disable ? this.date01.disable() : this.date01.enable()
  }

  reset() {
    this.form2.reset()
  }
}
