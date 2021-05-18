import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/media-library.actions';
import { MediaFormat } from "../enums/media-format.enum";
import { MediaItem, MediaLibraryModel } from "../models";

const mediaLibrary: MediaLibraryModel = {
  mediaList: [
    {
      title: "One Punch Man",
      releaseDate: '5/14/2018',
      cost: 39.99,
      format: MediaFormat.blurayMovie,
      onLoan: false
    },
    {
      title: "Goblin Slayer",
      releaseDate: '5/14/2019',
      cost: 39.99,
      format: MediaFormat.blurayMovie,
      onLoan: true
    },
    {
      title: "Let the Bad Times Roll",
      releaseDate: '5/07/2021',
      cost: 12.99,
      format: MediaFormat.mp3Music,
      onLoan: false
    }
  ]
}


const mediaLibraryReducer = createReducer(
  mediaLibrary,
  on(actions.loadMediaLibrary, (state, action) => ({ ...state, ...action })));

export function reducer(state: MediaLibraryModel = mediaLibrary, action: Action): MediaLibraryModel {
  return mediaLibraryReducer(state, action);
}
