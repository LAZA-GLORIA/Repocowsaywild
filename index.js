const userWilder = require('./information');
const cowsay = require('cowsay');
const { iw } = require('./information');

const body="Hello I'm " + iw.name + " from " + iw.campus + " Campus! ";

console.log(cowsay.say({
    text : body,
    e : "oO",
    T : "U "
})); 