import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterService } from './filter.component.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() filterClick = new EventEmitter();
  constructor(private service: FilterService) {}

  loading: boolean = false;
  heroes: Array<any> = [];
  multiLookup: Array<any> = [1495831666871, 1405833068599];

  async changeOptions(event: any) {
    this.loading = true;
   // this.heroes = await this.service.getHeroes(event).toPromise();
  }

  ngOnInit() {
  }

  onFilter() {
    this.filterClick.emit();
  }
}
