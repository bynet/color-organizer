import C from './constants';

/* const action = { 
    type: "ADD_COLOR", 
    id: "4243e1p0-9abl-4e90-95p4-8001l8yf3036", 
    color: "#0000FF",
    title: "Big Blue",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)" 
}

console.log( color( {} , action ));

Reducers are pure functions that takein state as the first argument and an action as the second argument.
The  names  of  the  fieldsmatch the names of the reducers that are passed in.

*/

export const color = ( state = {} , action ) => { 
    switch( action.type ){
        case C.ADD_COLOR:
            return {
               id : action.id ,
               title : action.title,
               color : action.color , 
               timestamp : action.timestamp,
               rating:0 
            }

        case C.RATE_COLOR:
            return ( state.id !== action.id ) ? 
                state : 
                {
                    ...state , 
                    rating : action.rating 
                }
        default: 
            return state ; 
    }

}

export const colors = ( state = [] , action ) => {
    switch( action.type ){
        case C.ADD_COLOR:
            return [ ...state , color( {} , action ) ]
        case C.RATE_COLOR:
            return state.map( c => color( c , action ))
        case C.REMOVE_COLOR:
            return state.filter( c => c.id !== action.id )
        default:
            return state;
    }
};



export const sort = ( state = 'SORTED_BY_DATE' ,  action ) => {
    switch( action.type ){
        case C.SORT_COLORS:
            return action.sortBy;
        default:
            return state;
    }
}
