let max =  Math.max(1,2,3);
console.log(max);


// apply() 
//provides a convinient wat to pass array values to a function

var a = (1,2,3,4,5);
console.log(a.max());

//apply function
var numbers = Math.max.apply(null,[1,2,3,4,5,6,7]);
 console.log(numbers);

