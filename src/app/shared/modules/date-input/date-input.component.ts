import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputComponent implements OnInit {
  @Input()
  parentForm!: FormGroup

  @Input()
  controlName!: string

  constructor() {}

  ngOnInit() {}
}
