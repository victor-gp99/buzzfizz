const Reader = require("./lib/Utils/Reader")

const explorers = Reader.readJsonFile("explorers.json")
console.log(explorers)