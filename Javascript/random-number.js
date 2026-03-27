let max = prompt("Enter the max number");

let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the Number");

while (true) {

    if (guess == "quit") {
        console.log("User Quit");
        break;
    }

    if (guess == random) {
        console.log("You Were Right! CONGRATS!!. Your number was", random);
        break;
    }

    else {
        guess = prompt("Your guess was wrong. Please try again");
    }   
}   