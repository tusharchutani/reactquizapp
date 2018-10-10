import axios from 'axios';
import {QUIZ_API} from '../shared/api';

export const SETUP_QUIZ  = 'quiz:StartQuiz';
export const SETUP_QUIZ_QUESTIONS="quiz:SetupQuizQuestions"
export const ERROR = "quiz:Error"

export function setUpAndStartQuiz(history){

    return async (dispatch)=>{
        function onSuccess(questions){
            dispatch({type: SETUP_QUIZ_QUESTIONS, payload:{questions}});
            history.push('/quiz');
            return questions;
        }

        function onError(error){
            dispatch({type:ERROR, payload:{error}});
            console.log("There is an unhandled error");
            return error;
        }

        try{
        var responseData = await axios.get(QUIZ_API);
        return onSuccess(responseData.data.results);
        }catch(error){
        return onError(error);
        }
    }
}
