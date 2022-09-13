import * as types from './actions'

// const initialCount = 0
// function count(countState = initialCount, action) {
//   // note how a reducer just tracks one specific slice now
//   switch (action.type) {
//     case types.INCREMENT: {
//       return countState + action.payload
//     }
//     default:
//       return countState
//   }
// }

const initialPokeState =
 { pokeInput: '', 
 resultingPoke: {}
}

const reducer = (pokeState = initialPokeState, action) => {
    switch (action.type) {
        case types.GET_POKEMON: 
            return  {
                ...pokeState, 
                currentPoke: res
            }
        case types.INPUT_CHANGE: 
            const {value} = action.payload
            return {
                ...pokeState, 
                pokeInput: value
            }
        
        default: 
        return pokeState
    }
 }

export default reducer
  // count, pokeState // each reducer now only a slice of application state
