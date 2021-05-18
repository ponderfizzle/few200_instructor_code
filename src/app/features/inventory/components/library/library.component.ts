import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MediaItem, MediaLibraryModel } from '../../models';
import { MediaLibraryState, selectMediaList } from '../../reducers';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  mediaLibrary$: Observable<MediaItem[]>;

  constructor(private store: Store<MediaLibraryState>) { }

  ngOnInit(): void {
    this.mediaLibrary$ = this.store.select(selectMediaList);
  }

}
