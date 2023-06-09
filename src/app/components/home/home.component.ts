import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() filter = new EventEmitter();
  inFilter: boolean = false;
  showFilter: boolean = true;

  constructor() {}

  ngOnInit() {
  }

  filterChange(item: any) {
    this.filter.emit(item);
    this.inFilter = true;
    this.showFilter = false;
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }
}
