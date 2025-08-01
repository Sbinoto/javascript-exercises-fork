const findTheOldest = function(x) {
    const now= new Date().getFullYear();
    return x.reduce((most, x)=>{
        if((most.yearOfDeath?most.yearOfDeath:now)-most.yearOfBirth>
        (x.yearOfDeath?x.yearOfDeath:now)-x.yearOfBirth)
            return most; else return x
        }, x)
    };

// Do not edit below this line
module.exports = findTheOldest;
