import { Component, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  searchText: string = '';
  constructor() {
  }
}
