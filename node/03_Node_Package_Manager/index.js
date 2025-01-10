const loadsh = require("lodash");

const names = ["john", "daniel", "thomas", "alex"];

const capitalize = loadsh.map(names, loadsh.capitalize);

console.log(capitalize);
