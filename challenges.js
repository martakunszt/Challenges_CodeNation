/* CHALLENGE*/

pizzaTop = "ham"

switch(pizzaTop){
    case "chesnut mushrooms":
    case "green bell pepper":
    case "corn":
        console.log("These are important ingredients for my pizza");
        break;
        case "ham":
        case "tomatoes":
        case "onions":
            console.log(`I don't mind having ${pizzaTop} on my pizza`);
            break;
            default:
                console.log(`${pizzaTop} shouldn't be on my pizza`)
}

/*Challenge 1 */
password ="4"

if(password.length > 8){
    console.log(password)
}
else {
    console.log("Password is too short")
}

/*Challenge 2*/

num = 4

if(num % 3 == 0 || num % 5 == 0){
    console.log("This number is divisible by 3 or 5")
}
else{
    console.log("This number is not divisible by 3 or 5")
}

/*Challnge 3*/

num = 20

if(num % 3 == 0 && num % 5 == 0){
console.log("fizz buzz")
}
else if(num % 5 == 0 ){
console.log("buzz")
}
else if(num % 3 == 0){
console.log("fizz")
}
else{
    console.log(num)
}

/*Challenge 4*/
num ="20202"

num = num.toString()
let newNum = num.split("").reverse().join("")


if(num == newNum){
    console.log("Palindrome")
}
else{
    console.log("Not a palindrome")
}
/*Challenge 5*/
time = "9 o'clock"
placeOfWork = "Milton"
townOfHome = "Cambridge"

if(time == "7 o'clock"){
    console.log(`At ${time} I'm at home in ${townOfHome}`)
}
else if(time == "8 o'clock"){
    console.log(`At ${time} I'm commuting to ${placeOfWork}`)
}
else{
    console.log("I'm at work")
}

/* CHALLENGE 6*/
str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
