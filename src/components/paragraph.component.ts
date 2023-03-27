import { Component, Input } from "@angular/core";

@Component({
  selector: 'paragraph',
  standalone: true,
  template: `<p>{{ message }}</p>`
})

export class ParagraphComponent {
  @Input() message: string
}