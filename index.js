const _ = require('lodash')

const numbers = [1,2,3,4,5,7,9]
_.each(numbers, function(number){
    console.log(number);
})