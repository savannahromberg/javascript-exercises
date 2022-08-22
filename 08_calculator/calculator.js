const add = function(a, b) {
	let answer = a + b;
  return answer;
};

const subtract = function(a, b) {
	let answer = a - b;
  return answer;
};

const sum = function(array) {
  let answer = 0;
    for (let i = 0; i <= array.length; i++) {
    if(typeof array[i] === `number`) answer += array[i];
    }
    return answer;
};

const multiply = function(array) {
  let answer = array.reduce((a, b) => a * b);
  return answer;
};

const power = function(a, b) {
	let answer = Math.pow(a, b);
  return answer;
};

const factorial = function(n) {
	let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
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
