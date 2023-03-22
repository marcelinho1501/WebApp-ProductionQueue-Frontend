import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PoComboFilterMode, PoModalAction, PoModalComponent, PoNavbarIconAction, PoNavbarItem, PoNotificationService, PoSelectOption, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router) {
    //redirect on refresh button.
    if (window.location.pathname != "/") {
      localStorage.removeItem('redirectUrl');
      localStorage.setItem('redirectUrl', window.location.pathname);
      this.router.navigate([window.location.pathname]);
    }    
  }
  
  ngOnInit(): void {}
}
