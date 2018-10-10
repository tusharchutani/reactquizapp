import { combineReducers } from 'redux'

import quizReducer from './quizReducer';
import resultReducer from './resultReducer';
export default combineReducers({
    quiz:quizReducer,
    result:resultReducer
});