const sumAll = function (x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
        return "ERROR";
    } else if (x > y) {
        [x, y] = [y, x];
    }
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
