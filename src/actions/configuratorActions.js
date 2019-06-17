import { SHOW_DESCRIPTION, SHOW_TITLECONF, VALUEI, VALUEE } from '../actions/types'
import axios from 'axios';

export const getDescription = () => async (dispatch) => {
    const res = await axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json')
       dispatch({
           type: SHOW_DESCRIPTION,
           payload: res.data.calculator.description
       })
       dispatch({
            type: SHOW_TITLECONF,
            payload: res.data.calculator.title
        })
   };  

   export const getValueI = value => {
    return {
      type: VALUEI,
      payload: value
    }
  };

  export const getValueE = value => {
    return {
      type: VALUEE,
      payload: value
    }
  };