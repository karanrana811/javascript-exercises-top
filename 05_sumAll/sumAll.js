const sumAll = function(numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number' || numOne < 0 || numTwo < 0) {
        return 'ERROR'
    } else {
        let sum = 0;
        for (let i = (numOne > numTwo ? numTwo : numOne) ; i <= (numOne > numTwo ? numOne : numTwo); i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
