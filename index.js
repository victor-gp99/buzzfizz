const Reader = require("./lib/Utils/Reader")
const ExplorerService = require ("./lib/Services/ExplorerService")

const explorers = Reader.readJsonFile("explorers.json")
//console.log(explorers)

// Aplicación del ExplorerService sobre la lista de explorers
console.log(ExplorerService.filterByMission(explorers, "node"))
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"))
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"))