/*Create a fruit machine function called Spin that returns three fruits*/

/*one = "Strawberry"
two = "Blackberry"
three = "Raspberry"

const Spin=()=>{
return one, two, three;
}
console.log(Spin)
*/


/*Challenge 9
Given a string rearrange the letters into alphabetical order */

str = "Abba is cool"

const sort =(str)=>{
    arr = str.split(''); /*splits word*/
    sorted = arr.sort(); /*this method sorts letters*/
    return sorted.join('');/*this one joins them together into one word*/
}
console.log(sort(str))

/*Challenge 14
Write a function that takes in a word and mimics a mexican wave. Hello hEllo heLlo etc
*/

str = "Scrumdiddlyumptious"

const wave=(str)=>{
    result = [];
    for (i = 0; i < str.length; i++){
        if (str[i] !=' ')

        result.push(str.slice(0,i) + str[i].toUpperCase() +str.slice(i +1)) 

    }
    return result
}
console.log(wave(str));

/*Challenge 4
You will set an array containing a number of colours for example ["red", "blue","red","blue"]
These represent coloured gloves in a drawer. 
Create a function called getPAirs that takes in this array and returns the number of possible
pairs of gloves*/

gloves=["purple","purple","jade", "jade", "burgundy", "burgundy"]

getPairs=(gloves)=>{

}

/*Challenge 7
Create a function that returns True or False based on i a number inputted into it, is prime or not*/

num = 4

const isPrime=(num)=>{
    for(var i=2; i< num; i++)
    if(num % i === 0) return false;
    return num>1;
}
console.log(isPrime(num))

/*Challenge 3 SoftwareUpdate*/

str = "1.3.2."
update = str.split('.').reverse()

const softUp=(str)=>{
for{
    return 
}

}
console.log(softUp(str))