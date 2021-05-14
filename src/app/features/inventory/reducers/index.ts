export const featureName = 'mediaLibraryFeature';

import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMediaLibrary from './media-library.reducer'
import { MediaLibraryModel } from '../models/media-library.models'

// This is for TypeScript. It just let's it know what is going on.
// None of this creates JavaScript

export interface MediaLibraryState {
  mediaLibrary: MediaLibraryModel
}

export const reducers: ActionReducerMap<MediaLibraryState> = {
  mediaLibrary: fromMediaLibrary.reducer
}

// Selectors

