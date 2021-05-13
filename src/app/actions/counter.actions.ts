import { createAction, props } from '@ngrx/store';

export const countIncremented = createAction(
  '[app counter] the count was incremented.'
)

export const countDecremented = createAction(
  '[app counter] the count was decremented'
)

export const countReset = createAction(
  '[app counter] the count was reset'
)

// { type: '[app counter] count by set, by: 1}

export const counterCountBySet = createAction(
  '[app counter] count by set',
  props<{ by: number }>()
)

export const loadCountBy = createAction(
  '[app counter] load saved count by'
);



