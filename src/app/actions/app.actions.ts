import { createAction, props } from "@ngrx/store";

export const applicationStarted = createAction(
  '[app] application started'
);


export const featureError = createAction(
  '[app] feature error',
  props<{ featureName: string, errorMessage: string }>()
);
