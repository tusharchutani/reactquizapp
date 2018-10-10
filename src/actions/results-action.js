export const TABULATE_RESULTS  = 'results:TabulateResults';

export function tabulateResults(results){

    var correct = results.filter(function(result){
        
        return result.correct
    });
    var outOf = results.length;

    return { type:TABULATE_RESULTS, payload:{correct:correct.length, outOf, questionResultInfo:results}};
    
}
