import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() isMobileMenuOn: boolean = false;
  menuItems = [
    {
      name: 'Procedure Schedule',
      url: '/procedure-schedule'
    },
    {
      name: 'Manage',
      url: '/manage'
    },
    {
      name: 'Inventory',
      url: '/all'
    },
  ]
  
}
