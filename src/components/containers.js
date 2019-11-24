import {connect} from 'react-redux'
import {compose} from 'redux'
import ColorList from './ui/ColorList'
import {ColorDetails} from './ui/ColorDetails'
import {AddColorForm} from './ui/AddColorForm'
import { sortColors } from '../utils/array-helpers'

import { addColor , rateColor , removeColor } from '../actions'

export const NewColor = connect( null , 
    dispatch => ({
        onNewColor( title , color ) {
            dispatch ( addColor( title , color ))
        }
    }) 
    )( AddColorForm )

export const Colors = connect( 
    ({colors},{match}) => ({
        colors : sortColors( colors , match.params.sort )
    }),
    dispatch => ({ 
        onRemove(id) {
            dispatch( removeColor(id))
        },
        onRate(id,rating){
            dispatch( rateColor(id , rating ) )
        }
    })(ColorList)
)


export const Color = connect(({colors, match })=> 
    ()
)

