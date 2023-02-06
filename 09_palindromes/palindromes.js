const palindromes = function (string) {
    let input = string.toLowerCase().replace(/\W/g, '');
    console.log(input);
    let head = 0;
    let tail = input.length - 1;
    do {
        if(input.charAt(head) !== input.charAt(tail)) return false;
        head++;
        tail--;
    } while (tail - head > 1)

    return true;
};

// Do not edit below this line
module.exports = palindromes;
