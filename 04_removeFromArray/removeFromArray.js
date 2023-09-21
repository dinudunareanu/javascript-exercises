const removeFromArray = function(arr, ...args) {
    for (let arg of args) {
        let i = arr.indexOf(arg);
        if (i !== -1) {
            arr.splice(i, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
