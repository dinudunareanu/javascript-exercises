const reverseString = function(string) {
    let len = string.length;
    let result = "";

    for (let i = len - 1; i >= 0; i--) {
        result += string[i];
    }
    
    return result;
};

// Do not edit below this line
module.exports = reverseString;
