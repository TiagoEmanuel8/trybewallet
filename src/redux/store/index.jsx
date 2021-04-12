import { createStore } from 'redux';
import rootReducers from '../reducers/index';

const extension = window.__REDUX_DEVTOOLS_EXTENSION__
&& window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducers, extension);

export default store;
