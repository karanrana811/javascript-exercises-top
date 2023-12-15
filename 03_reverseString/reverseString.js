const reverseString = function(string) {
    let realStr = string.toString();
    let reversedString = ''
    for (let i = (realStr.length - 1) ; i >= 0 ; i--){
        reversedString += realStr[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
