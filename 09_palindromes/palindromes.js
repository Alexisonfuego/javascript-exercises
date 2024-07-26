const palindromes = function (word) {
    word = word.toLowerCase();
    const array = word.split("");
    const cleanedArray = array.filter(char => char.match(/[a-z0-9]/i));
    const cleanedWord = cleanedArray.join("");
    let reverseWord = cleanedArray.reverse().join("");
    return cleanedWord === reverseWord;
}

// Do not edit below this line
module.exports = palindromes


//Could've tidied up into fewer functions as per solution.js
//i.e
//     const cleanedArray = word
//         .toLowerCase()
//         .split("")
//         .filter(char => char.match(/[a-z0-9]/i));
//     const cleanedWord = cleanedArray.join("");
//     let reverseWord = cleanedArray.reverse().join("");
//     return cleanedWord === reverseWord;