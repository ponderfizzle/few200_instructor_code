import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import * as appActions from '../actions/app.actions';
import * as counterActions from '../actions/counter.actions';

@Injectable()
export class AppEffects {
  // Thsi is a list of all the things that happen when the application starts.


  // turns applicationStarted => loadCountBy
  loadCounterBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => counterActions.loadCountBy())
    )
  )

  constructor(private actions$: Actions) { }
}
