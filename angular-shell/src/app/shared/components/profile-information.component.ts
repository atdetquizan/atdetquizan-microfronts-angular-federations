import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-profile-information',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-template #userInfoContainer></ng-template>',
})
export class ProfileInformationComponent implements AfterViewInit {
  @ViewChild('userInfoContainer', { read: ViewContainerRef })
  userInfoContainer!: ViewContainerRef;

  async ngAfterViewInit() {
    const cmp = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: 'UserInfoComponent',
    });

    this.userInfoContainer.createComponent(cmp.UserInfoComponent);
  }
}
