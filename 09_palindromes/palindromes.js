const palindromes = function(word) {
    word = word.toLowerCase();
    let array = word.split("").filter((char) => char.match(/[a-z0-9]/i));
    let cleanedWord = array.join("");
    let reverseWord = array.reverse().join("");
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