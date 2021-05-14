import { createAction, props } from '@ngrx/store';
import { MediaFormat } from '../enums/media-format.enum';

export const applicationStarted = createAction(
  '[app] application started'
);

export const featureError = createAction(
  '[app] feature error',
  props<{ featureName: string, errorMessage: string }>()
);

export const loadMediaLibrary = createAction(
  '[mediaLibrary] load media library'
)

export const addMedia = createAction(
  '[mediaLibrary] add media',
  props<{ title: string, releaseDate: string, cost: number, format: MediaFormat.blurayMovie, onLoan: boolean }>()
)


