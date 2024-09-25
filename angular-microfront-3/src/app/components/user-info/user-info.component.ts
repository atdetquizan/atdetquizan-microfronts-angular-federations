import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  /**
   * Determines whether click linkedin on
   */
  onClickLinkedin() {
    window.open("https://www.linkedin.com/in/atdetquizan/", "__blank");
  }
}
