import { MediaFormat } from "../enums/media-format.enum";

export interface MediaLibraryModel {
  mediaList: MediaItem[],
  giveMetheName()
}

export interface MediaItem {
  title: string,
  releaseDate: string,
  cost: number,
  format: MediaFormat,
  onLoan: boolean
};


/*
MediaLibraryModel {
  mediaList: [
    {
      id: "something",
      description: "something",
      project: "maybe",
      completed: false,
      saved: true
    }
  ]
}
*/
