// let btn = document.querySelector(".hello")
// let btn2 = document.querySelector('.hover')

// function sayAlert() {
//     alert("Hello!");
// }

// function mhover() {
//     console.log("You Hovered on a button")
// }

// function click() {
//     console.log("You clicked on a button")
// }

// btn.onclick = sayAlert;

// btn2.onmouseenter = mhover;

// btn2.onclick = click;


// addEventListener(event,callback)


let clrbtn = document.querySelector('.btn');

clrbtn.addEventListener("click", function() {
    let value = document.querySelector('p');
    let randomColor = getRandomColor();
    value.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    let body = document.querySelector('body');
    body.style.backgroundColor = randomColor; 

    console.log("Button was clicked ");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
};



// let form = document.querySelector('form');

// // form.addEventListener('submit', function (event){
// //     event.preventDefault();
// //     alert("form was submitted");
// // });

// form.addEventListener('submit', function (event){
//     event.preventDefault();
    
//     let user = document.querySelector("#username");
//     let pass  = document.querySelector("#pass");
//     console.dir(form);
//     console.log(user.value);
//     console.log(pass.value);
// });

