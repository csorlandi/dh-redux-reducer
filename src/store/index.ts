import { legacy_createStore as createStore, combineReducers } from 'redux';
import { projetos } from './reducers/projetos';
import { contaReducer } from './reducers/conta';

const store = createStore(
  combineReducers({
    projetos,
    conta: contaReducer,
  }),
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
