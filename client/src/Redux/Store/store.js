import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from "../Reducer/reducer";




const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) 
);



export default store;