const removeFromArray = function(arr, ...args) {
    return arr.filter((item)=>!args.includes(item));
};


module.exports = removeFromArray;
