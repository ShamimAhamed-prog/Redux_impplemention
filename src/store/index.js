import {createStore} from 'redux';
import rootreducers from './reducers/rootreducers'

const store = createStore(rootreducers)
 
export default store