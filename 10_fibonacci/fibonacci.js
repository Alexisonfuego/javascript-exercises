const fibonacci = function (num) {
    num = parseInt(num);

    if (num < 0) {
        return "OOPS"
    }

    if (num === 0) {
        return 0
    }

    let a = 0
    let b = 1
    let temp

    for (let i = 1; i < num; i++) {
        temp = a + b
        a = b
        b = temp
    }

    return b
};

// Do not edit below this line
module.exports = fibonacci;
