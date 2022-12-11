const sumAll = function(start, end) {

    if(start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number') return "ERROR";

    let smallest = start < end ? start : end;
    let biggest = start > end ? start : end;
    let sum = 0;

    for(let i = smallest; i <= biggest; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
