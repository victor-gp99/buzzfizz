class FizzbuzzService {

    static applyValidationInExplorer(explorer){
        
        if(explorer.score%5 === 0 && explorer.score%3 === 0 ){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        } else if (explorer.score%5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        } else if (explorer.score%3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        } else {
            explorer.trick = explorer.score;
            return explorer;
        } 
        
    }

    static applyValidationInNumber(score){
        if(score%5 === 0 && score%3 === 0 ){
            return {score: score, trick: "FIZZBUZZ"};
        } else if (score%5 === 0){
            return {score: score, trick: "BUZZ"};
        } else if (score%3 === 0){
            return {score: score, trick: "FIZZ"};
        } else {
            return {score: score, trick: score};
        } 
    }  
}

module.exports = FizzbuzzService;