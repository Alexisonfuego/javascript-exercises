const reverseString = function(str) {
    let stringArray = str.split('');

    let reverseArray = stringArray.reverse();

    let reverseString = reverseArray.join('');

    return reverseString;
};

//can all be done in one line apparently
//return str.split("").reverse().join("");

// Do not edit below this line
module.exports = reverseString;
