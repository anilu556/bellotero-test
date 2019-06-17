import { SHOW_TITLE, TEST1, TEST2 } from '../actions/types'

const initialState = {
    title: "",
    test1: [],
    test2: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_TITLE:
            return {
                ...state,
                title: action.payload,
            }
        case TEST1:
            return {
                ...state,
                test1: action.payload,
            }
        case TEST2: 
            return {
                ...state,
                test2: action.payload,
            }                     
        default:
            return state;     
    } 
}
