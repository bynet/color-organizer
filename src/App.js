import React, {Component} from 'react';
import './card.css';
import './star.css';
import './color.css';
import './App.css';
import {v4} from 'uuid';
import ColorList from './ColorList';
import AddColorForm from './AddColorForm';

class App extends Component {

  constructor(props){
    super(props)
    const initialState = {
      colors : [
        {
          "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
          "title": "ocean at dusk",
          "color": "#00c4e2",
          "rating": 5
        },{
          "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
          "title": "lawn",
          "color": "#26ac56",
          "rating": 3
        },
        {
          "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
          "title": "bright red",
          "color": "#ff0000",
          "rating": 0
        }
      ],
      sort: 'SORTED_BY_DATE'
    }

    this.addColor = this.addColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)

    const store = createStore(  combineReducers( { colors , sort }) , 
                              ( localStorage['redux-store'] ) ? 
                                JSON.parse(localStorage['redux-store']) : initialState ) 

    console.log('1.store.getState : ' , store.getState() )

    store.dispatch({ 
      type: "ADD_COLOR",    
      id: v4(),    
      title: "Party Pink",    
      color: "#F142FF",    
      timestamp: new Date().toString()})
    
    console.log('2.store.getState : ' , store.getState() )

  }

  addColor(title , color ){
    const colors = [ ...this.state.colors , {
      id : v4(),
      title , 
      color , 
      rating : 0  
    }] ; 

    this.setState( {colors} );
  }

  rateColor( id , rate ) {
    const colors = this.state.colors.map( color => ( color.id !== id ) ? 
      color : 
      {
        ...color ,
        rate
      }
    )

    this.setState({ colors });
  }
  removeColor( id ) {
    const colors = this.state.colors.filter( color => color.id !== id ) 
    this.setState({colors})
  }
  render() {
    const {colors} = this.state
    const {addColor,rateColor,removeColor} = this;

    return (
      <div className="App">
        <section className="main">
          <AddColorForm onNewColor={addColor}/>
          <ColorList colors={colors} onRate={rateColor} onRemove={removeColor}/>
        </section>
      </div>
    );

  }
}

export default App;
