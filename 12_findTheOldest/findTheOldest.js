const findTheOldest = function(arr) {
    let max = 0;
    let oldestPerson = "";

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].yearOfDeath) {
            arr[i].yearOfDeath = new Date().getFullYear();
        }

        let age = arr[i].yearOfDeath - arr[i].yearOfBirth;

        if (age > max) {
            max = age;
            oldestPerson = arr[i];
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
