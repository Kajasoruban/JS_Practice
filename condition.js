// // q1
// function drive() {
//     let age = prompt("Enter your age: ");let dif = null;
//     (age>=18) ? console.log("You are old enough to drive.")
//     : console.log(`You are left with ${18-age} years to drive.`);
// }

// // q2
// function age() {
//     let myAge = 21 , yourAge = prompt("Enter your age:");
//     (myAge>yourAge) ? console.log(`I am ${myAge-yourAge} years older than you`):
//     (myAge>=yourAge) ? console.log("You and me are same age"):
//     (myAge<yourAge) ?console.log(`You are ${yourAge-myAge} years older than me`):
//     console.log("error");
// }


// // q3
// function greater() {

// let a = 5,b = 4;

// document.getElementById("fun3").innerHTML= a>b ? a+" is greater than "+b:a+" is less than "+b;

// }


// // q4

// // function score() {

// // let score= prompt('Enter your marks');

// // score>=80? console.log('A'):
// // score>=70? console.log('B'):
// // score>=60? console.log('C'):
// // score>=50? console.log('D'):
// // score>=0? console.log('F'):
// // console.log('Invalid Score');

// // }




// // q5

// // function season(){
// //     let month = prompt("enter the month");
// //     month = month.toLowerCase();

// //     switch(month){
// //         case "september":
// //         case "october":
// //         case "november":
// //             console.log("Autumn");
// //             break;
// //         case "december":
// //         case "january":
// //         case "february":
// //             console.log("Winter");
// //             break;
// //         case "march":
// //         case "april":
// //         case "may":
// //             console.log("Spring");
// //             break;
// //         case "june":
// //         case "july":
// //         case "august":
// //             console.log("Summer");
// //             break;

// // }

// // }


let month = prompt("enter the month");
    

    (month.match(/september/i)||month.match(/october/i)||month.match(/november/i))?console.log("Autumn"):
    (month.match(/december/i)||month.match(/january/i)||month.match(/february/i))?console.log("Winter"):
    (month.match(/march/i)||month.match(/april/i)||month.match(/may/i))?console.log("Spring"):
    (month.match(/june/i)||month.match(/july/i)||month.match(/august/i))?console.log("Summer"):
    console.log("Enter a valid month");


// //q6



// // q8

// function dev() {

// var dev= 'html';
// dev=dev.toUpperCase()

// switch (dev) {
//   case 'HTML':
//   case 'CSS':
//   case 'JAVASCRIPT':
//   console.log('front-end');
//   break;
//    case 'NODEJS':
//    case 'ExpressJS':
//    console.log('Backend');
//    break;
//    default:
//    console.log("Not in lis");
  
//   }

// }

// function mR() {
//     let m=prompt('enter your marks');
//     if(m>=0 && m<=100){

//         if(m>=80){return 'A'}
//         else if (m>=70){return 'B'}
//         else if (m>=60){return 'C'}
//         else if (m>=50){return 'D'}
//         else{return 'F'}
//     }
//     else {return 'Invalid number'};
// }

// let mR =()=> {let m=prompt('enter your marks');
//   return m>=0 && m<=100? 
//     (m>=80)?'A':(m>=70)?'B'
 
 
 
 
 
//   :'Invalid number'
// }




// document.getElementById('fun7').innerHTML=mR();
