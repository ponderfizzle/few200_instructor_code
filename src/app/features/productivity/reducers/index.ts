
export const featureName = 'productivityFeature';

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoListItem, TodoListModel, TodoListSummary } from '../models';
import * as fromTodos from './todos.reducer';
import * as fromProjects from './projects.reducer';

export interface ProductivityState {
  todos: fromTodos.TodoState,
  projects: fromProjects.ProjectState
}


export const reducers: ActionReducerMap<ProductivityState> = {
  todos: fromTodos.reducer,
  projects: fromProjects.reducer
}

// Selectors

// 1. Feature Selector
const selectProductivityFeature = createFeatureSelector<ProductivityState>(featureName);

// 2. Selector Per "Branch"
const selectTodosBranch = createSelector(
  selectProductivityFeature,
  f => f.todos
)

const selectProjectsBranch = createSelector(
  selectProductivityFeature,
  f => f.projects
)

// 3. Helpers

const { selectAll: selectTodoEntityArray } = fromTodos.adapter.getSelectors(selectTodosBranch);
const { selectAll: selectProjectEntityArray } = fromProjects.adapter.getSelectors(selectProjectsBranch);
// console.log(fromTodos.adapter.getSelectors(selectTodosBranch)); // read about javascript object destructuring

const selectTodoListItems = createSelector(
  selectTodoEntityArray,
  entities => entities.map(entity => {
    return {
      ...entity,
      saved: !entity.id.startsWith('TEMP')
    } as TodoListItem
  })
)

const selectTodoListSummary = createSelector(
  selectTodoListItems,
  items => {
    return {
      complete: items.length === 0 ? 0 : items.filter(i => i.completed).length,
      incomplete: items.length === 0 ? 0 : items.filter(i => i.completed === false).length,
      totalTodos: items.length

    } as TodoListSummary
  }
)

// 4. What our Component Needs.

// that returns a TodoListModel, which has list which is TodoListItem[], summary: { complete, incomplete, totalTodos}

export const selectProjectNames = createSelector(
  selectProjectEntityArray,
  projects => projects.map(p => p.name) // ['Work', 'Home']
)

export const selectTodoListItemModel = createSelector(
  selectTodoListItems,
  selectTodoListSummary,
  (list, summary) => {
    return {
      list,
      summary
    } as TodoListModel
  }
)
