import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from './state/actions' // path might be different
import './App.css';
import {changeInput, getPokemon} from './state/actions'




function App(props) {

  const { getPokemon, changeInput, pokeInput } = props;
  useEffect(() => {
    console.log('App Rendering')
  }, [])

  const onSubmit = (evt) => {
    evt.preventDefault();
    getPokemon(pokeInput)
  }

  const onChange = evt => {
    const {value} = evt.target
    changeInput({value})
  }
 
  return (
    <div className="App">

      <h1>Pokemon Redux API</h1>
      {/* <span>{props.count}</span>
  <button onClick={evt => props.increment(3)}>inc</button>
 */}


  <form className='SearchForm'>
    <div className="input">
      <input type='text' placeholder='Choose your partner!' onChange={onChange}/>
    </div>
    <div className="SubmitButton">
      <button type='submit' onClick={onSubmit}>Search!</button>
    </div>
  </form>
   {/*<div className="TeamSpread">
  <h3>Your Team: </h3>

</div>*/}

  
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('state in app.js', state)
  return {
    pokeInput: state.pokeInput
  }
}

export default connect(mapStateToProps, {changeInput, getPokemon})(App) // if connecting App