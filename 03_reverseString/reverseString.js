const reverseString = function(string) {
    let stringArray = string.split("");
    let reversedString ='';
    for(let i = stringArray.length - 1; i >= 0; i--){
        reversedString += stringArray[i];
    }
    return reversedString;

    //return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
