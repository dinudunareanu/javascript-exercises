const palindromes = function (a) {
    a = a.toLowerCase();
    let b = "";
    let c = "";

    for (let i = 0; i < a.length; i++) {
        if ( ('a' <= a[i] && a[i] <= 'z') || ('0' <= a[i] && a[i] <= '9') ) {
            b += a[i];
        }
    }
    for (let i = b.length - 1; i >= 0; i--) {
        c += b[i];
    }

    console.log(a);
    console.log(b);
    console.log(c);

    return b === c;
};

// Do not edit below this line
module.exports = palindromes;
