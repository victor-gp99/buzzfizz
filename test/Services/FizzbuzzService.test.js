const FizzbuzzService = require("../../lib/Services/FizzbuzzService");

describe("Test for FizzbuzzService class ",()=>{
    test ("For applyValidationInExplorer function",()=>{
        const explorer = {name: "Explorer1", score: 1};
        const explorerInNode = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorerInNode).toStrictEqual({name: "Explorer1", score: 1, trick: 1});

        const explorer3 = {name: "Explorer3", score: 3};
        const explorerInNode1 = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorerInNode1).toStrictEqual({name: "Explorer3", score: 3, trick: "FIZZ"});
        
        const explorer5 = {name: "Explorer5", score: 5};
        const explorerInNode2 = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorerInNode2).toStrictEqual({name: "Explorer5", score: 5, trick: "BUZZ"});

        const explorer15 = {name: "Explorer15", score: 15};
        const explorerInNode3 = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorerInNode3).toStrictEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"});

    }); 
    
    test ("For applyValidationInNumber function",()=>{
        
        const explorerInNode = FizzbuzzService.applyValidationInNumber(1);
        expect(explorerInNode).toStrictEqual({score: 1, trick: 1});

        
        const explorerInNode1 = FizzbuzzService.applyValidationInNumber(3);
        expect(explorerInNode1).toStrictEqual({score: 3, trick: "FIZZ"});
        
        
        const explorerInNode2 = FizzbuzzService.applyValidationInNumber(5);
        expect(explorerInNode2).toStrictEqual({score: 5, trick: "BUZZ"});

        
        const explorerInNode3 = FizzbuzzService.applyValidationInNumber(15);
        expect(explorerInNode3).toStrictEqual({score: 15, trick: "FIZZBUZZ"});

    });  
});