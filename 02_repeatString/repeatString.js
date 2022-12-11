const repeatString = function(string, repetitions) {
    if(repetitions < 0) return "ERROR";
    
    let result = '';
    for(let i = 0; i < repetitions; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
