// index.js

// function expression called divide
const divide = function(a, b) {
    return a / b;
  }
  
  // arrow function called square
  const square = (num) => {
    return num * num;
  }
  
  // arrow function called add
  const add = (a, b) => {
    return a + b;
  }
  
  // Export the functions for use in other files
  module.exports = {
    divide,
    square,
    add
  };
  
  

