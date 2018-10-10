import { SETUP_QUIZ_QUESTIONS } from '../actions/quiz-actions';

const defaultState = {
    questions:[]
}
export default function quizReducer(state=defaultState, action){
    const { type, payload } = action;
    switch(type){
        case SETUP_QUIZ_QUESTIONS:
            return {
                ...state,
                questions: payload.questions
            }
        //actions will go here
        default:
            return state;
    }
}