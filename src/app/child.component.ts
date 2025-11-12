import { Component } from '@angular/core';
import { GrandChildComponent } from './grand-child.component';

@Component({
  selector: 'app-child',
  imports: [GrandChildComponent],
  template: `
    <h2>Child</h2>
    @defer (hydrate on interaction) {
    <app-grand-child></app-grand-child>
    }
  `,
})
export class ChildComponent {}
