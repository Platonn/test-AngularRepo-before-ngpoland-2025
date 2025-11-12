import { Component, inject, PendingTasks, ViewChild, ViewContainerRef } from '@angular/core';
// import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  // imports: [ChildComponent],
  template: `
    <h1>App</h1>
    <ng-template #childContainer></ng-template>
  `,
})
export class App {
  @ViewChild('childContainer', { read: ViewContainerRef, static: true })
  childVcr: ViewContainerRef | undefined;

  pendingTasks = inject(PendingTasks);

  ngOnInit() {
    this.pendingTasks.run(() =>
      import('./child.component')
        .then((m) => m.ChildComponent)
        .then((lazyLoadedComponent) => {
          this.childVcr?.createComponent(lazyLoadedComponent);
        })
    );
  }
}
