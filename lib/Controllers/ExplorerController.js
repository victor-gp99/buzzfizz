const ExplorerService = require("../Services/ExplorerService");
const FizzbuzzService = require ("../Services/FizzbuzzService");
const Reader = require("../Utils/Reader");

const explorers = Reader.readJsonFile("explorers.json");

class ExplorerController {

    static getExplorersByMission(mission){   
        const result = ExplorerService.filterByMission(explorers, mission);
        return result;
    }

    static getExplorersUsernamesByMission(mission){   
        const result = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return result;
    }

    static getExplorersAmonutByMission(mission){
        const result = ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        return result; 
    }

    static getBuzzFizzByMission(score){
        const result = FizzbuzzService.applyValidationInNumber(score);
        return result;
    }

    static getExplorersByStack(stack){
        const result = ExplorerService.getExplorersByStack(explorers,stack);
        return result;
    }
    
}
module.exports =ExplorerController;