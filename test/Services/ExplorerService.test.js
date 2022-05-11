const ExplorerService = require ("../../lib/Services/ExplorerService")

describe("Test for ExplorerService class",()=>{
    
    test ("For filterByMission function",()=>{
        const explorers = [{mission: "node" }];
        const explorersInNode =  ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1); 
    })
    
    test ("For getAmountOfExplorersByMission function",()=>{
        const explorers = [{mission: "node" }];
        const explorersInNode =  ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(1); 
    })

    test ("For getExplorersUsernamesByMission function",()=>{
        const explorers = [{mission: "node", githubUsername: "ajolonauta1" }];
        const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersInNode).toStrictEqual(["ajolonauta1"]);
    })  
})
