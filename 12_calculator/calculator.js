const add = function(x, y) {
	return x+y
};

const subtract = function(x, y) {   
	return x-y
};

const sum = function(args) {
	return args.reduce((x,y)=>x+y,0)
};

const multiply = function(args) {
  return args.reduce((x,y)=>x*y, 1)
};

const power = function(x, y) {
	return x**y
};

const factorial = function(x) {
	if (x==0) return 1;
  return x*factorial(x-1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
