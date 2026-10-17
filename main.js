// alert("Welcome to the Cary Police Department website!");
// const userName = prompt("Please enter your name:");
// alert("Hello, " + userName + "! Welcome to the Cary Police Department website!");
// let carName = "Ford Explorer Interceptor"
// console.log(carName)

// carName = "Dodge Durango Pursuit"
// console.log(carName)

// const city = "Cary"
// console.log(city)
// city = "Charlotte"
// console.log(city)

// const weather = prompt("enter todays weather")
// if (weather === "Sunny") {
//     alert("You should take a walk today :D")
// }
// else if(weather === "Stormy") {
//     alert("you should take an umbrella")
// }
// else if(weather === "Cold") {
//     alert("Take a jacket with you")
// }
// else {
//     alert("I don't know what you should do")
// }
// const food = prompt("What is your favorite food?").toLowerCase()

// if (food === "borsht") {
//     alert("You ordered Borsht")
// }
// else if (food === "pizza") {            
//     alert("You ordered Pizza")
// }   
// else if (food === "shashlik") {
//     alert("You ordered Shashlik")
// }
// else if (food === "borsht pizza shashlik" || food === "borsht shashlik pizza" || food === "pizza borsht shashlik" || food === "pizza shashlik borsht" || food === "shashlik borsht pizza" || food === "shashlik pizza borsht") {
// alert("Check will be 500$")
// }
// else {
//     alert("I don't know what you ordered")
// }
// =====================Logical operators========================
// let number1 = 7
// let string1 = "B"

// console.log(String(number1) === Number(string1))
// function calculator() {
//     const prompt1 = (prompt("Enter the first number:"))
//     const prompt2 = (prompt("Enter the second number:"))
//     const operation = prompt("Enter the operation (sum, subtract, multiply, divide):").toLowerCase()
//     // do homework here
//     if (operation === "+") {
//         alert(`The result is: ${sumNumbers(Number(prompt1), Number(prompt2))}`)
//     }
//     alert(`${prompt1} ${operation} ${prompt2}`)
// } 

// function sumNumbers(num1, num2) {
//     return num1 + num2
// }

// function subtractNumbers(num1, num2) {
//     return num1 - num2
// }

// function multiplyNumbers(num1, num2) {
//     return num1 * num2
// }

// function divideNumbers(num1, num2) {
//     if (num2 === 0) {
//         return "Error: Division by zero is not allowed."
//     }
//     return num1 / num2
// }
// calculator()
// const listOfJackets = ["Blue Jacket","Green Jacket","redjacket,","Black Jacket","White Jacket"]
// console.log(listOfJackets);
// console.log(listOfJackets[2]) 
// listOfJackets.push("Purple Jacket")
// listOfJackets.push("Yellow Jacket")
// console.log(listOfJackets)
// const currentJacket = listOfJackets.pop()
// console.log (currentJacket)
// const userAnswer = prompt("What jacket do you have")
// const colors = []
// colors.push(userAnswer)
// console.log (colors)

const burgerButton = document.querySelector(".burger")
const menu = document.querySelector(".menu")
const header = document.querySelector(".header")
console.log(header) 
burgerButton.addEventListener("click", function(){
    menu.classList.toggle("menu-open")
}) 