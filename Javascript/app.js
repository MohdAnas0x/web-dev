// Data Types

// 1.Number 
// 2.Boollean 
// 3.String 
// 4.Undefined 
// 5.Null 
// 6.Bigint 
// 7.Symbol

let x = 25;

console.log(typeof x) ;


// conditional statements 

let a = 100 ;
let b = 20 ;

let c = a - b ;

console.log("difference of a - b is :",c) ;

if (a > b) {

    console.log("a is greater than b") ;
}
else  {

    console.log("a is less than b") ;
}


// String Methods

let str = "     Hello World     ";

let newStr = str.trim().toUpperCase();      // Method Chaining

console.log(newStr);

console.log(str.length);
console.log(newStr.length);

console.log(str.slice(8,16));

console.log(str.replace("World","Galaxy"));

console.log(newStr.repeat(3));

console.log(str.indexOf("He"));


// ARRAY

let arr = ['Hello',43,23,88.9,0,1];

console.log("Length of array",arr.length);
console.log(arr[1]);
console.log(arr[0][1]);

let fruits = ['banana','apple','mango','guava'];

console.log(fruits);

fruits[0] = 'grapes';

console.log(fruits);


// Array Methods

// push - add to end
// unshift - add to start
// pop - delete from end and returns it
// shift - delete from start and returns it

console.log(fruits.push('toyota')); 
console.log(fruits.push('skoda')); 

console.log(fruits.unshift('ferrari')); 

console.log(fruits.pop('ferrari'));

console.log(fruits.shift('ferrari'));

console.log(fruits);

// Concatenation

let plus = arr.concat(fruits); 
console.log(plus);

console.log(plus.reverse());

// Slice

console.log(fruits.slice(3));
console.log(fruits.slice(1,3));
console.log(fruits.slice(-1)); 

// Splice 

console.log("Splice method",plus.splice(0,2));  
 
console.log(plus);

plus.splice( 0,0, "some",'thing');

console.log(plus);

// Sorting

console.log(fruits.sort()); 


let nums = [[1,2],[3,4],[5,6]];

console.log(nums);

