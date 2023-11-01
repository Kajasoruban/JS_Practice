// q1
function drive() {
    let age = prompt("Enter your age: ");let dif = null;
    (age>=18) ? console.log("You are old enough to drive.")
    : console.log(`You are left with ${18-age} years to drive.`);
}

// q2
function age() {
    let myAge = 21 , yourAge = prompt("Enter your age:");
    (myAge>yourAge) ? console.log(`I am ${myAge-yourAge} years older than you`):
    (myAge>=yourAge) ? console.log("You and me are same age"):
    (myAge<yourAge) ?console.log(`You are ${yourAge-myAge} years older than me`):
    console.log("error");
}


// q3
function greater() {

let a = 5,b = 4;

document.getElementById("fun3").innerHTML= a>b ? a+" is greater than "+b:a+" is less than "+b;

}


// q4

function score() {

let score= prompt('Enter your marks');

score>=80? console.log('A'):
score>=70? console.log('B'):
score>=60? console.log('C'):
score>=50? console.log('D'):
score>=0? console.log('F'):
console.log('Invalid Score');

}


// q5

// function season(){
//     let month = prompt("enter the month");
//     month = month.toLowerCase();

//     switch(month){
//         case "september":
//         case "october":
//         case "november":
//             console.log("Autumn");
//             break;
//         case "december":
//         case "january":
//         case "february":
//             console.log("Winter");
//             break;
//         case "march":
//         case "april":
//         case "may":
//             console.log("Spring");
//             break;
//         case "june":
//         case "july":
//         case "august":
//             console.log("Summer");
//             break;

// }

// }


let month = prompt("enter the month");
    month = month.toLowerCase();

    (month=="september"||month=="october"||month=="november")?console.log("Autumn"):
    (month=="december"||month=="january"||month=="february")?console.log("Winter"):
    (month=="march"||month=="april"||month=="may")?console.log("Spring"):
    (month=="june"||month=="july"||month=="august")?console.log("Summer"):
    console.log("Enter a valid month");


//q6





// q8

function dev() {

var dev= 'html';
dev=dev.toUpperCase()

switch (dev) {
  case 'HTML':
  case 'CSS':
  case 'JAVASCRIPT':
  console.log('front-end');
  break;
   case 'NODEJS':
   case 'ExpressJS':
   console.log('Backend');
   break;
   default:
   console.log("Not in lis");
  
  }

}


