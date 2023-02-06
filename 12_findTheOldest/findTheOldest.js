const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (oldest === 0) return person;
        if (getAge(oldest) < getAge(person)) return person;
        return oldest;
    }, 0)
};

const getAge = function(person) {
    if(person.yearOfDeath === undefined) { 
        return new Date().getFullYear() - person.yearOfBirth; 
    }
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
