import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PoNavbarIconAction, PoNavbarItem } from '@po-ui/ng-components';
import { HeaderService } from './header.component.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private headerService: HeaderService) { }

  @Output() filterClick = new EventEmitter();
  itemsNavBar: Array<PoNavbarItem> = this.headerService.getItemsNav();
  iconsActions: Array<PoNavbarIconAction> = this.headerService.getNavBarIcons();

  ngOnInit() {
    this.itemsNavBar[1].action = this.onFilterClick.bind(this);
  }

  onFilterClick() {
   this.filterClick.emit();
  }
}
