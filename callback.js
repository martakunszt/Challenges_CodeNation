/*console.log("Hello")

let a = 50;


try{
let ba = a / 2
console.log(b)
}
catch(err){
    console.log(err)
}*/

/*const myPosts = [
    {title: 'Post One', body:'This is post one body'},
    {title: "Post Two", body:'This is post two body'}
];

function getPosts () {
    setTimeout( () =>{
        myPosts.forEach( (post)=> {
            console.log(post.title);
        })
        console.log(myPosts);
    }, 1000);
}

function createPost(post) {
    setTimeout( () => {
        myPosts.push(post);
    }, 5000);
}

createPost({title: 'post 3', body:"this is the post three body"});
getPosts();*/

/*the difference between var and let*/
/*let a = 10;
let b = 10;
console.log(a, b, c)
let c = 10;*/ /*var moves itself up, not a value but just var - you don't get an error but still the value is not read*/

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
