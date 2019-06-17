import { SHOW_ITEMS } from './types';
import axios from 'axios';

export const getItems = () => async (dispatch) => {
 const res = await axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json')
    dispatch({
        type: SHOW_ITEMS,
        payload: res.data.menu.items
    }) 
}   
