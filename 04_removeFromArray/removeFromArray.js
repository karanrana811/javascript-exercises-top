const removeFromArray = function(inputArray, ...rest) {
// use filter method to filter out the input to be kicked out
return inputArray.filter( (arrElement) => {
        return !rest.includes(arrElement)
    
})

};

// Do not edit below this line
module.exports = removeFromArray;





