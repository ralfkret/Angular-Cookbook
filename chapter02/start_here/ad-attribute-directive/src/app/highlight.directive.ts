import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() text: string;
  @Input() color: string;


  constructor() { }

}
