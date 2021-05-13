import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number,
  by: number
}

const initialState: CounterState = {
  current: 0,
  by: 1
}

const myReducer = createReducer(
  initialState,
  on(actions.counterCountBySet, (state, action) => ({ ...state, by: action.by })),
  on(actions.countIncremented, (state) => ({ ...state, current: state.current + state.by })),
  on(actions.countDecremented, (state) => ({ ...state, current: state.current - state.by })),
  on(actions.countReset, () => initialState)
)
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}
