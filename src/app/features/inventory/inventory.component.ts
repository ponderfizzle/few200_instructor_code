import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { loadMediaLibrary } from './actions/media-library.actions';
import { MediaLibraryState } from './reducers';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(store: Store<MediaLibraryState>) {
    store.dispatch(loadMediaLibrary());
  }

  ngOnInit(): void {
  }

}
