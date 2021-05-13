import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createAction } from "@ngrx/store";
import { map } from "rxjs/operators";

import * as appActions from '../../../actions/app.actions';
import * as todoActions from '../actions/todos.actions';

@Injectable()
export class AppEffects {



  // I have an error, I fixed it already, tell the app it happened so they can tell the user
  showErrorOnBadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.addTodoFailed),
      map(failure => appActions.featureError({ featureName: 'Productivity - Todos', errorMessage: failure.message }))
    )
  )
  // applicationStarted -> loadTodos




  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => todoActions.loadTodos())
    )
  )

  // addTodoFailed -> appAction.displayErrorMessage
  constructor(private actions$: Actions) { }
}
