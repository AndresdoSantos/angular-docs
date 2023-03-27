import 'zone.js'
import { Component } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'

@Component({
  selector: 'counter-button',
  standalone: true,
  template: `<button (click)="count = count + 1">Add</button> {{ count }}`
})

export class CounterComponent {
  count = 0
}

bootstrapApplication(CounterComponent)
