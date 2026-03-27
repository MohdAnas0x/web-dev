// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// let n = prompt("Write Your Number");

// n = parseInt(n);

// for( let i = n; i<=n*10; i = i+n){
//     console.log(i);
// }

// Nested loop with 'loop of'

// let heros = [['ironman','thor','spiderman'],['superman','batman','flash']];

// for (list of heros) {
//     for(hero of list) {
//         console.log(hero);
//     }
// }

// Object Literals

let student = {
    name: "chimtu",
    age: 23,
    marks: 90.1,
    city: "New Delhi"
};

console.log(student);

let post = {
    username: "@chimtuansari",
    content: "This is my First Post",
    like: 150,
    repost: 5,
    tags: ["@apnacollege", "@delta"]
};

console.log(post);

console.log(post["username"]);
console.log(post.content);

let prop = "repost";
console.log(post[prop]);

// changing value in object

student.city = 'Mumbai';
console.log(student);

// adding value

student.gender = "female";
console.log(student);

delete student.gender;
console.log(student); 

const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "O",
        city: "Mumbai"
    }
};

console.log(classInfo);

console.log(classInfo.aman);
console.log(classInfo["karan"]); 

console.log(classInfo.shradha.city);
console.log(classInfo.aman.city);

classInfo.aman.city = "Gurugram" 
console.log(classInfo.aman.city);  


const classInfo1 = [
    {
        name: "aman",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "Shraddha",
        grade: "A",
        city: "Pune"
    },
    {
        name: "karan",
        grade: "O",
        city: "Mumbai"
    }
];

console.log(classInfo1); 
console.log(classInfo1[1].city); 
console.log(classInfo1[2].name); 

console.log(Math.random());    

let ran_num = Math.random();

ran_num = ran_num * 100 ;

ran_num = Math.floor(ran_num);

console.log(ran_num);  

let random = Math.floor((Math.random() * 10) + 1);

console.log(random);