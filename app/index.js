// stores...
//      hold application state
//      allows access via getState
//      registers listeners
//      handle unregistering listeners

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters  } from './actions'
let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)