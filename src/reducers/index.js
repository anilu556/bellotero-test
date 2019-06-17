import {combineReducers} from 'redux';
import testimonialReducer from './testimonialReducer';
import navbarReducer from './navbarReducer';
import configuratorReducer from './configuratorReducer';

export default combineReducers({
    title: testimonialReducer,
    test1: testimonialReducer,
    test2: testimonialReducer,
    items: navbarReducer,
    desc: configuratorReducer,
    titleConf: configuratorReducer,
    valueIngredients: configuratorReducer,
    valueEmployees: configuratorReducer
});
