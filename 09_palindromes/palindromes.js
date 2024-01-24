const palindromes = function (str) {
    // filter out punctuation using regex test, and join the string to one single string
    const punctuationRegex = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
    let filteredStr = str.split('').filter(char => !punctuationRegex.test(char)).join('').toLowerCase();
    // reverse the joined punctuationless string and check if it's equal to the original str
    return filteredStr === filteredStr.split('').reverse().join('')
    
};

// Do not edit below this line
module.exports = palindromes;
