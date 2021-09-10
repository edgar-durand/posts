import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output()filterValue: EventEmitter<string> = new EventEmitter<string>();
  searchValue: string = '';
  constructor() { }
  applyFilter(){
    this.filterValue.emit(this.searchValue)
  }

}
