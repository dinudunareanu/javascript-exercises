const fibonacci = function(index) {
    index = +index;
    if (index <= 0) {
        return "OOPS";
    }

    if (index == 1 || index == 2) {
        return 1;
    }

    let a = 1;
    let b = 1;
    let c = 0;
    let i = 3;
    while (i < index) {
        c = a + b;
        a = b;
        b = c;

        i++;
    }
    return a + b;
};

// Do not edit below this line
module.exports = fibonacci;
