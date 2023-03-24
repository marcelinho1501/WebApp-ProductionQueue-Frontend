import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PoNavbarIconAction, PoNavbarItem } from '@po-ui/ng-components';
import { HeaderService } from './header.component.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private headerService: HeaderService, private router: Router) { }

  @Output() filterClick = new EventEmitter();
  itemsNavBar: Array<PoNavbarItem> = this.headerService.getItemsNav();
  iconsActions: Array<PoNavbarIconAction> = this.headerService.getNavBarIcons();

  ngOnInit() {
    this.itemsNavBar[0].action = this.onHomeLink.bind(this);
    this.itemsNavBar[1].action = this.onFilterClick.bind(this);
    this.iconsActions[1].action = this.onExit.bind(this);
  }

  onFilterClick() {
   this.filterClick.emit();
  }

  onExit(){
  this.router.navigate(['/login']);
  }

  onHomeLink(){
    this.router.navigate(['/home']);
  }
}
