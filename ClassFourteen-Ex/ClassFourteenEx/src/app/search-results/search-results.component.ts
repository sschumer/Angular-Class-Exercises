import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  private searchHistory: History [];
  addSearchHistory = new EventEmitter<History []>();

  getHistory() {
    return this.searchHistory.slice();
  }

  saveHistory(history: History) {
    this.searchHistory.push(history)
    this.addSearchHistory.emit(this.searchHistory.slice())
  }
  constructor() { }

  ngOnInit(): void {
  }

}
