import axios from 'axios'

// export function increment(amount) {
//     return {
//         type: types.INCREMENT, 
//         payload: amount
//     }
// }

export function changeInput({value}) {
    return {
        type: INPUT_CHANGE,
        payload: {value}
    }

}

const URL =  'https://pokeapi.co/api/v2/pokemon'

export function getPokemon(pokeName) {
    return function(dispatch) {
        axios.get(`${URL}/${pokeName}`)
        .then((res) => {
            console.log(res)
            dispatch({ type: GET_POKEMON, payload: res})
                }
        ).catch((err) => console.log(err))
        }
    }


    export const INCREMENT = "INCREMENT"
    export const GET_POKEMON = "GET_POKEMON"
    export const INPUT_CHANGE = "INPUT_CHANGE"
