const fibonacci = function(num) {
    let fibonacciArr = [];
    for(let i = 0; i <= num ; i++){
        if(i === 0){
            fibonacciArr.push(1)
        } else if(i === 1) {
            fibonacciArr.push(1)
        } else {
            fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i-2])
        }

    }
    return num < 0 ? 'OOPS': fibonacciArr[num - 1]
};



// Do not edit below this line
module.exports = fibonacci;
