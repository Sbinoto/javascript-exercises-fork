const sumAll = function(a, b) {
    if(Math.floor(a)!=a||Math.floor(b)!=b||a<0||b<0){
        return "ERROR"
    }else if(a>b) [a,b]=[b,a];
    let sum=0;
    for(a;a<=b;a++){
        sum+=a
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
