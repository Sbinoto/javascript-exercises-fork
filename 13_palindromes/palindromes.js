const palindromes = function (x) {
    const y=x.toLowerCase().split("").filter(x=>"qwertyuiopasdfghjklzxcvbnm1234567890".includes(x));
    for (let i=0;i<=y.length-1;i++){
        if (y[i]!==y.toReversed()[i]) return false
};return true}

// Do not edit below this line
module.exports = palindromes;
