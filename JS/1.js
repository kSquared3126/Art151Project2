//comment

//console.log('hello world');

/*
this is to make multi line comments
*/


/*
let x=7;
let y=3;
let z=x+y;
console.log(z);
console.log('answer: ' + z);
let firstString='gamer';
console.log(firstString);
let isTrue = false;
console.log("true? " + isTrue);

let arrayx = [1,2,3,4,5];
a=[4,5,6,7,8,9];
console.log('array x: ' + arrayx);

let arrayxzero = arrayx[0];
console.log('arrayx zero: ' + arrayxzero);

arrayx[1]=0;
console.log('arrayx one: '+ arrayx[1]);
console.log('# of items in arrayx: '+ arrayx.length);

arrayx.pop();
console.log(arrayx);
arrayx.push(1);
console.log(arrayx);

function myFunction(){
    console.log('~~~~~');
    console.log('gamer');
    console.log('~~~~~');
}
myFunction();

let f = myFunction;
f();

function sayMyname(name){
    console.log('~~~~~');
    console.log('name: '+ name);
    console.log('~~~~~');
}
sayMyname('Kevin');

function tax(amount){
    let result = amount * .0825;
    return result;
}
let taxed = tax(100);
console.log(taxed);

setTimeout(function(){
    console.log('i waited 2 seconds');
}, 2000);

let counter=0;
function timeout(){
    setTimeout(function(){
        console.log('counter = ' + counter++);
        if(counter >= 11){  stops counter at 10 
            return;
        }
        timeout();
    }, 2000);
}
timeout(); */

/*
let count =4;
if(count==4){
    console.log('count = 4');
}

count=10;
if(count==10){
    console.log('count = 10');
}
else{
    console.log('count !=10');
}

if(count==4){
    console.log('4');
}else if(count>4){
    console.log('count>4');
}else if(count<4){
    console.log('count<4');
}

let livingstonNames = '1stChoice';
switch(livingstonNames){
    case '1stChoice':
        console.log('Ryan');
        console.log('Graham');
        console.log('Ian');
        break;
    
    case '2ndChoice':
        console.log('Lee');
        console.log('Quin');
        console.log('Scott');
        break;
    
    default:
        console.log('Paula and Gred');
        break;
}
*/
/*
let a = [2,4,6,8,10];
for(i=0; i<10; i++){
    console.log(a[i]);

}
*/

/*
console.log(window);
alert('hello');
window.alert('hello');
document.body.style.backgroundColor = 'blue';
*/

// let h1 = document.getElementById('headerOne');
// h1.style.color = 'blue';
// h1.style.backgroundColor = 'red';


//navigate multiple elements like an aray; changes the first p instance to be red
//pTwo[0].style.color = 'red';

//use to iterate through dom objects
//spread opperator 
// let listItemsClone = [...listItems];
// listItemsClone.forEach(function(item){
//     console.log(item);
// })

// let link = document.getElementById('link');
// let showLink = link.getAttribute('href');
// console.log(showLink);
// link.setAttribute('href', 'start.html');

//window.location.replace('lose.html'); changes the page automatically

//prints hello world when page is clicked
// let h1 = document.getElementById('headerOne');
// h1.addEventListener("click", function(){
//     console.log("Hello World");
// })

// //sets color of body to aqua when mouseover
// h1.addEventListener("mouseover", function(){
//     document.body.style.color='aqua';
// })