/*global scope*/

/*let globalVar = "globalVar";

console.log(`Global Scope: ${globalVar}`);

const callVar = () =>{
    console.log(`Inside function: ${globalVar}`);

}

callVar;*/

/*function scope*/

/*let globalVar = "globalVar"

console.log(`Global Scope: ${globalVar}`);

const callVar=()=>{
    let localVar = "localVar";
    console.log(`Inside Scope: ${globalVar}`)
   console.log (`Global Scope: ${localVar}`)
   /
}
callVar();
console.log(`Global Scope with local variable: ${localVar}`)*/
/*Error local var is not defined*/

/*scope chain
Js looks for variable in the current scope, if it doesn't find it, 
it will then go to look outward to the previous scope until the global scope if needed
THIS IS CALLED SCOPE CHAIN*/


/*BLOCK SCOPE*/
/*
let stringLet="let string";
var stringVar = "var string";

const newString = () =>{
    let stringLet = "new let string";
    var stringVar = "new var string";

    console.log(`Inside function: ${stringLet}`);
    console.log(`Inside function: ${stringVar}`);
}
newString();
console.log(`Outside function:${stringLet}`)
console.log(`Outside function:${stringVar}`)

*/

/*Let vs. Var*/
/*
function startLet(){
    for (let i = 0; i < 5; i++);{
        console.log(i)
    }
    console.log(i)
}
function startVar (){
    for (var i =0; i < 5; i++){
        console.log(i);
    }
    console.log(i)
}
console.log("Running with let");
startLet();

console.log("Running with var");
startvar();
*/


/*Higher order functions - is when you call a function and you pass another function as a parameter*/
/*
let whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}

let greet = (time, fn) => {
    if (time < 1200){
        fn("Morning");
    }else if (time >= 1200 && time < 1800){
        fn("Afternoon");
    }else{
        fn("Evening");
    }
}
greet(1400, whichGreeting);*/


/*let add = () =>{
    return 2 + 3
}
add();
console.log(add())*/


/*let add = (num1) =>{
    return (num2)=>{
        return num1 + num2;
    }
}

console.log(add(2)(1))*/

/*Activity*/

str = "Hello There"

const sayHi = (str) => {
    return str
}

const repeat =()=>{
    for (let i = 0; i < 5; i++); {
        
      }
}


/*Activity 2*/

/*let num =[1,2,3,4,5]

const multi = num.map((value, index, array)=>{
return value * 3;})

console.log(num);
console.log(multi)*/


/*Activity 3*/
const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
return a - b; }
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
return a/b; }
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
 }
 console.log(doMaths(1)(2))