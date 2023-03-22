import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  valueDefault = {};
  @Output() filterClick = new EventEmitter();
  
  constructor() {}

  fields: Array<PoDynamicFormField> = [
    {
      property: 'placeList',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Local',
      searchService: 'https://po-sample-api.fly.dev/v1/heroes',
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'apresentation',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Tipo de visualização',
      fieldValue: 'code',
      fieldLabel: 'label',
      options: [
        { label: 'Local', code: '1' },
        { label: 'Programada', code: '2' },
        { label: 'Programada + Local', code: '3' },
        { label: '', code: 'NSW' }
      ],
      optionsMulti: false
    },
  ];
  ngOnInit() {
    this.valueDefault = {
      apresentation: ['3'],
    };
  }

  onFilter() {
    this.filterClick.emit();
  }

}