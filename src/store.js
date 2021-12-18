import rootReducer from './reducers';
import middleware from './middleware';
import { createStore } from 'redux';
const store= createStore(rootReducer,middleware);
export default store;