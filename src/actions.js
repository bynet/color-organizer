import C from './constants'


export const removeColor = id => ( { type : C.REMOVE_COLOR , id } )
export const rateColor = ( id , rating )  => ( { type : C.RATE_COLOR , id , rating } )