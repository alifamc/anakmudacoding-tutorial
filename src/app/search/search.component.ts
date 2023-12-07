// search.component.ts
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm$ = new Subject<string>();
  searchValue = '';

  constructor() {
    this.searchTerm$
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(searchTerm => this.handleSearch(searchTerm));
  }

  handleSearch(searchTerm: string) {
    // Perform the search operation here
    console.log(`Searching for: ${searchTerm}`);
    this.searchValue = searchTerm;
    // Can use the search value anywhere
  }
}