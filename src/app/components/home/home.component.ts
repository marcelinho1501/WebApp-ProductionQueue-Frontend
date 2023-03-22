import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() filter = new EventEmitter();
  inFilter: boolean = false;
  constructor() {}
  
  ngOnInit() {
  }

  filterChange(item: any) {
    this.filter.emit(item);
    this.inFilter = true;
  }
}