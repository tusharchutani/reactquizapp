import {TABULATE_RESULTS} from '../actions';
const defaulState = {
    score:{
        correct:0,
        outOf: 0
    },
    questionResultInfo:[]
}
export default function resultReducer(state=defaulState, action){
    const { type, payload } = action; 

    switch(type){
        case TABULATE_RESULTS:
            return {
                score:{
                    correct: payload.correct,
                    outOf: payload.outOf
                },
                questionResultInfo:payload.questionResultInfo
            }
        default:
            return state;        
    }
}