import { Component, inject, ViewContainerRef } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  // imports: [ChildComponent],
  template: `
    <h1>App</h1>
    <!-- <app-child></app-child> -->
  `,
})
export class App {
  vcr = inject(ViewContainerRef);

  ngOnInit() {
    this.vcr.createComponent(ChildComponent);
  }
}
