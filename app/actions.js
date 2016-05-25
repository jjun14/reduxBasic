// Actions describe that something happend but don't
// actually change the application's state
// reducers -> change application state

// actions types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// other constants
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// actions creators are functions that create actions
let nextTodoId = 0;
export function addTodo(text){
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export function toggleTodo(index){
  return {
    type: TOGGLE_TODO,
    index
  }
}

export function setVisibilityFilter(filter){
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
