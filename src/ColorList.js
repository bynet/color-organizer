import React from 'react';
import Color from './Color';

const ColorList = ({ colors=[] , onRate = f=>f , onRemove = f=>f }) => 
    <div className="color-list">
        { (colors.length === 0 ) ? 
            <p>No Colors Listed ( Add a color )</p> :
            colors.map( color => <Color key={color.id} {...color} />)
        }
    </div>

export default ColorList;