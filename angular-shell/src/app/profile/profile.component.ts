import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  /**
   * Creates an instance of profile component.
   * @param {Router} router 
   */
  constructor(private router: Router) {}
  onChangeTab(value: any) {
    this.router.navigate(value.path.split('/'));
  }
}
