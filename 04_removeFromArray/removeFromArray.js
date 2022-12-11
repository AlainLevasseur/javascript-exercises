const removeFromArray = function(array, ...options) {
    return array.filter((element) => {
        for(const removeItem of options) {
            if(removeItem === element) return false;
        }
        return true;
    })
};

// Do not edit below this line
module.exports = removeFromArray;
