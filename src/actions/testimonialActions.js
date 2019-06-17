import { SHOW_TITLE, TEST1, TEST2 } from './types';
import axios from 'axios';

export const getInfo = () => async (dispatch) => {
 const res = await axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
    dispatch({
        type: SHOW_TITLE,
        payload: res.data.slider
    })
    dispatch({
        type: TEST1,
        payload: res.data.slider.reviews[0]
    })
    dispatch({
        type: TEST2,
        payload: res.data.slider.reviews[1]
    })  
}   
