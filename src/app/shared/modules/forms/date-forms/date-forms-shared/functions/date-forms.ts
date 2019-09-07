import { BsDatepickerConfig } from 'ngx-bootstrap'

export function getDatepickerConfig(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), {
    containerClass: 'theme-blue',
    showWeekNumbers: false
  })
}
