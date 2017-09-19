import * as React from 'react'
import { render } from 'react-dom'
import { createStore, Store } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer, IRootStoreState } from 'client/app/store/reducers/root';
import { AppContainer } from 'client/app/ui/components/app';

// TODO: Add middleware
const store: Store<IRootStoreState> = createStore<IRootStoreState>(rootReducer)

render(
  <Provider store={store} >
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
