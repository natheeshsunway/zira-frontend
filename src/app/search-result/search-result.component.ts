import { Component, OnInit, Input } from '@angular/core';
import { listData } from './../../datas/list'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent{
  @Input()
  searchText: any;
  list = listData.reverse();
  constructor() {
  }
}
