import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log('Starting') 

const name = prompt("enter your name:");
console.log(`hello, ${name}`); 

const number = parseInt(prompt("Enter a number :"));
if(number > 0) {
    console.log("The number is postive")
} else if (number == 0) {
    console.log(" tje number is zero")
} else{
    console.log("The number is negative")
}