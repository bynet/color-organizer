
import { createStore, combineReducers , applyMiddleware  } from 'redux'
import { colors , sort } from './reducers'
import thunk  from 'redux-thunk'

const clientLogger = store => next => action => {
    if( action.type ){
        let result 
        console.groupCollapsed("dispatching" , action.type )
        console.log('prevState ' , store.getState() )
        console.log('action' , action )
        result = next( action )
        console.log('nextState' , store.getState() )
        console.groupEnd();
        return result
    }
    else{
        return next(action)
    }
}


const middleware = [ clientLogger , thunk ]

const storeFactory = (initialState = {} ) => {
   // applyMiddleware( ...middleware ) ( createStore )( combineReducers({colors,sort}) , initialState );
    createStore(combineReducers({ colors , sort }), initialState);
}
export default storeFactory;
