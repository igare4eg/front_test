console.log("Hello! it's JavaScript!");
let name = "Vasya";
let age = 30;
console.log("Name: ", name);
console.log("Age: ", age);

let a = 10;
let b = 3;
console.log("Addition: ", a + b);
console.log("Difference: ", a - b);
console.log("Multiplication: ", a * b);
console.log("Division: ", a / b);

let userName = prompt("Hello! What is your name?");
console.log("Hello, " + userName + "!");
let userAge = Number(prompt("How old are you?"));
if (isNaN(userAge)) {
  console.log("Please enter a valid number for your age.");
} else {
  if (userAge < 18) {
    console.log("You are a minor.");
  } else if (userAge < 60) {
    console.log("You are an adult.");
  } else {
    console.log("You are a senior citizen.");
  }
}
let userNumber = Number(prompt("Enter a number:"));
for (let i = 1; i <= 10; i++) {
  console.log(userNumber + " * " + i + " = " + userNumber * i);
}
let userNumberSquared = userNumber * userNumber;
console.log("The square of your number is: " + userNumberSquared);
function greetUser(name) {
  return "Hello, " + name + "!";
}
console.log(greetUser(userName));
let numbers = [1, 2, 3, 4, 5];
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("Sum of array: ", sumArray(numbers));
