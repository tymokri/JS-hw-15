"use strict";

let num = prompt("Enter the number");
let errorText = "";

if (num === null) {
    errorText = "Sorry that you do not want to enter the number";
    alert(errorText);
    throw errorText;
}
if (isNaN(num)) {
    errorText = "Sorry, number must be valid number";
    alert(errorText);
    throw errorText;
}

let isPrime = true;

for (let i = 2; i < num ; i += 1) {

    // if we found out that num is not prime
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime);