export const featureName = 'mediaLibraryFeature';

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMediaLibrary from './media-library.reducer'
import { MediaItem, MediaLibraryModel } from '../models/media-library.models'

// This is for TypeScript. It just let's it know what is going on.
// None of this creates JavaScript


export interface MediaLibraryState {
  mediaLibrary: MediaLibraryModel;
}

export const reducers: ActionReducerMap<MediaLibraryState> = {
  mediaLibrary: fromMediaLibrary.reducer
}

// Feature Selector
const selectMediaLibraryFeature = createFeatureSelector<MediaLibraryState>(featureName);

// Selectors
const selectMediaBranch = createSelector(
  selectMediaLibraryFeature,
  feature => feature.mediaLibrary.mediaList
)

// const selectMediaBranch = (state: MediaLibraryState) => state.mediaLibrary.filter((item) => item.title == "One Punch Man");

export const selectMediaList = createSelector(
  selectMediaBranch,
  branch => branch
)
