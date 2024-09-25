import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-template #sidebarContainer></ng-template>',
  // template: '<div #sidebarContainer></div>',
})
export class SidebarComponent implements AfterViewInit {
  /**
   * View child of tabs component
   */
  @ViewChild('sidebarContainer', { read: ViewContainerRef })
  sidebarContainer!: ViewContainerRef;
  // @ViewChild('sidebarContainer', { static: true }) sidebarContainer!: ElementRef;

  /**
   * after view init
   */
  async ngAfterViewInit() {
    const cmp = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: 'SidebarComponent',
    });

    this.sidebarContainer.createComponent(cmp.SidebarComponent);
  }

  // async ngAfterViewInit() {
  //   const ButtonModule = await loadRemoteModule({
  //     remoteEntry: 'http://localhost:8080/remoteEntry.js',
  //     remoteName: 'react_remote',
  //     exposedModule: './Button'
  //   });

  //   const ReactButton = ButtonModule.default; // Assuming default export
  //   const reactElement = React.createElement(ReactButton, { label: 'Click Me' });

  //   const container = this.buttonContainer.nativeElement;
  //   const root = ReactDOM.createRoot(container);
  //   root.render(reactElement); // Render using 'createRoot'
  // }
}
