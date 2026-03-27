function hello() {
    return "Hello World";
    console.log("Hello World");
}

console.log(hello());

hello();

// Dice

function dice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log("Number of dice is :", dice);
}

dice();

// arguments in function

function info(name, age) {
    return `${name}'s age is ${age}.`;
}

let inf = info("shradha", 23);
console.log(inf);

// sum of n mumbers

function sum(n) {
    let sumn = 0;
    for (let i = 1; i <= n; i++) {
        sumn += i;
    }

    return sumn;
}

console.log(sum(4));


// Concatenation of all strings

let str = ["Faah ", "Meow ", "Hello"];

function concat(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }

    return result;

}

// Methods

const calculator = {
    add: function(a,b){      // add(a,b){ return a+b;}
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a-b;
    }

};

console.log(calculator.add(4,4));





// 'this' Keyword

const stude = {
    name: "shradha",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg(){
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
}


// try & catch 

try {
    console.log(a);
} catch {
    console.log("variable a is not defined");
    
}

console.log("hello");


try {
    console.log(a);
} catch(err) {
    console.log("variable a is not defined");
    console.log(err);
    
}

console.log("hello");


// Arrow function

const sum1 = (a ,b) => {
    console.log(a + b);
    
} ;

// implicit return in arrow function

const sum3 = (a ,b) => (a + b) ;


// Set Timeout  - (function, timeout)

console.log("Hi there!");

setTimeout( () => {
    console.log("Set Timeout!"); 
    
},4000)

console.log("Bye there!");


// Set Interval  - (function, timeout)

// setInterval( () => {
//     console.log("Set Interval!"); 
    
// },2000)


const sqr = (n) => (n*n);
console.log(sqr(5));

// setInterval(() => {
//     console.log("hello World interval");
    
// }, 2000);



// array methods forEach

let arr = [
    {
        name: "aman",
        marks: 95
    },
    {
        name: "shradha",
        marks: 94
    },
    {
        name: "rajat",
        marks: 92
    }
];

arr.forEach((student1) => {
    console.log(student1.marks);
    
});