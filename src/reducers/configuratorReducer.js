import { SHOW_DESCRIPTION, SHOW_TITLECONF, VALUEI, VALUEE } from '../actions/types'

const initialState = {
    valueIngredients: 10,
    valueEmployees: 1,
    desc: [],
    titleConf : "",
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_DESCRIPTION:
            return {
                ...state,
                desc: action.payload,
            } 
        case SHOW_TITLECONF:
            return {
                ...state,
                titleConf: action.payload,
            } 
        case VALUEI:
            return {
             ...state,
            valueIngredients: action.payload
            } 
        case VALUEE:
            return {
            ...state,
            valueEmployees: action.payload
            }
        default:
            return state;     
    } 
}
