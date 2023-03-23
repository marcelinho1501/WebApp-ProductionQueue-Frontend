import { PoNavbarIconAction, PoNavbarItem } from "@po-ui/ng-components";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {

  getItemsNav(): Array<PoNavbarItem>  {
    const arrayNavBarItem: Array<PoNavbarItem> = [
      {
        label: 'Bem vindo ao APP Kanban',
      },
      {
        label: 'Filtro'
      },
      {
        label: 'Ajuda',
        link: '/about',
      }];

    return arrayNavBarItem;
  }

  getNavBarIcons(): Array<PoNavbarIconAction> {
    const iconsBarNav: Array<PoNavbarIconAction> = [
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
    return iconsBarNav;
  }

  onAction(){

  }
}
