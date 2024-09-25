import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-template #tabsContainer></ng-template>',
})
export class TabsComponent implements AfterViewInit {
  /**
   * View child of tabs component
   */
  @ViewChild('tabsContainer', { read: ViewContainerRef })
  tabsContainer!: ViewContainerRef;

  @Output() changeTab: EventEmitter<any> = new EventEmitter<any>();

  /**
   * after view init
   */
  async ngAfterViewInit() {
    const cmp = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: 'TabsComponent',
    });

    const create = this.tabsContainer.createComponent<{
      changeTab: EventEmitter<any>;
    }>(cmp.TabsComponent);
    create.instance.changeTab = this.changeTab;
  }
}
