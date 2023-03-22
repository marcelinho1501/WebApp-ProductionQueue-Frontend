import { Component } from '@angular/core';
import { PoNavbarIconAction, PoNavbarItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  itemsNavBar: Array<PoNavbarItem> = [
    {
      label: 'teste',
      link: '/teste'
    }];
    
  iconsActions: Array<PoNavbarIconAction> = [
    {
      label: 'user',
      tooltip: 'Usuário',
      icon: 'po-icon po-icon-user'
    
  },
  {
    label: 'login',
    tooltip: 'Sair',
    icon: 'po-icon po-icon-exit'
}];
}
