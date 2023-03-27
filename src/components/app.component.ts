import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CounterComponent } from './counter.component';
import { ParagraphComponent } from './paragraph.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, ParagraphComponent],
  template: `
    <p>hello, this is angular and vite </p>
    <counter-button />
    <paragraph message="Olá, component com props" />
  `,
  styles: [`:host { display: block; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
  constructor() {}
  ngOnInit(): void {}
}