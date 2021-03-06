import { SHOW_ITEMS } from '../actions/types'

const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_ITEMS:
            return {
                ...state,
                items: action.payload,
            }                    
        default:
            return state;     
    } 
}
