import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStatusComponent } from '../user-status';

@Component({
  selector: 'app-user-status-list',
  standalone: true,
  imports: [CommonModule, UserStatusComponent],
  templateUrl: './user-status-list.component.html',
  styleUrls: ['./user-status-list.component.scss']
})
export class UserStatusListComponent {
  status = [
    {
      title: 'Pool',
      path: 'https://img.freepik.com/foto-gratis/arco-iris-al-final-paisaje-carretera_23-2151596720.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1727136000&semt=ais_hybrid'
    },
    {
      title: 'Kelly',
      path: 'https://i.pinimg.com/236x/d2/0c/d1/d20cd1caf2b11068b566ff92070dcf54.jpg'
    },
    {
      title: 'Raul',
      path: 'https://img.freepik.com/foto-gratis/vista-forma-corazon-montanas-paisaje-lago_23-2150825103.jpg'
    },
    {
      title: 'Henry',
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4bYAQ8Lqv6t6IMm6CvNgtuJdHSBofgDr-BA&s'
    },
    {
      title: 'Anthony',
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMlIQ5eZblCRf1lYym7ir6gyXEZNQAql73Fw&s'
    },
    {
      title: 'Melisa',
      path: 'https://pbs.twimg.com/profile_images/516293102089158656/obFtB8tL_400x400.jpeg'
    },
    {
      title: 'Dwight',
      path: 'https://i.pinimg.com/236x/11/c6/85/11c685557ab96d6ee91f9493a70964fd.jpg'
    },
    {
      title: 'Howars',
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxbgtIw7p5ptjS_bB0fKRGObUKC-nBSuldw&s'
    },
  ]
}
