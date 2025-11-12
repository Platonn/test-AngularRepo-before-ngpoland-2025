import { Component, inject, ViewContainerRef } from '@angular/core';

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
    import('./child.component')
      .then((m) => m.ChildComponent)
      .then((lazyLoadedComponent) => {
        this.vcr.createComponent(lazyLoadedComponent);
      });
  }
}
