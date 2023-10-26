// q1
function drive() {
    let age = prompt("Enter your age: ");let dif = null;
    (age>=18) ? console.log("You are old enough to drive.")
    : console.log(`You are left with ${dif = 18-age} years to drive.`);

}

// q2
function age() {
    let myAge = 21 , yourAge = prompt("Enter your age:");
    (myAge>yourAge) ? console.log(`I am ${ya=myAge-yourAge} years older than you`):
    (myAge>=yourAge) ? console.log("You and me are same age"):
    (myAge<yourAge) ?console.log(`You are ${ma=yourAge-myAge} years older than me`):
    console.log("error");
}

// q3

let a = 5;
let b = 4;
a>b ? console.log(a+" is greater than "+b):console.log(a+" is less than "+b);

// q4

let score= 75;

score>=80? console.log('A'):
score>=70? console.log('B'):
score>=60? console.log('C'):
score>=50? console.log('D'):
score>=0? console.log('F'):
console.log('Invalid Score');



// q5

function season(){
    let month = prompt("enter the month");
    month = month.toLowerCase();

    switch(month){
        case "september":
        case "october":
        case "november":
            console.log("Autumn");
            break;
        case "december":
        case "january":
        case " february":
            console.log("Winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("Spring");
            break;
        case "june":
        case "july":
        case "august":
            console.log("Summer");
            break;

}

}


// q8

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

