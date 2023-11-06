//Switch

// q1
/*
Using the JavaScript switch statement to get the day count based on a month


In this example, we have four cases:

If the month is 1, 3,5, 7, 8, 10, or 12, the number of days in a month is 31.
If the month is 4, 6, 9, or 11, the number of days in that month is 30.
If the month is 2, and the year is not the leap year, the number of days is 28. 
  If the year is the leap year, the number of days is 29.
If the month is not in the valid range (1-12), the default branch executes and sets the dayCount variable to -1,
  which indicates the invalid month


*/

// var mo=parseInt(prompt("Enter the month:"));

// switch(mo){
//     case 1:case 3:case 5:case 7:case 8:case 10:case 12:
//     console.log("The number of days in this month is 31");
//     break;
//         case 4:case 6:case 9:case 11:
//         console.log("The number of days in this month is 30");
//         break;
//             case 2:
//             2023%4===0 ? console.log("The number of days in this month is 29") : console.log("The number of days in this month is 28");
//             break;
//             default:
//                 console.log(-1);
// }

// q2
/*
Write a simple Switch statement for basic calculation
(+,-,*, / , %)(Addition, subtraction, multiple, division, reminder)
Enter two static value
*/

// var calc=prompt("Enter the operation needed");
// var n1=4,n2=6;

// switch (calc) {
//     case "+":
//     console.log(n1+n2);
//     break;
//     case "-":
//     console.log(n1-n2);
//     break;
//     case "*":
//     console.log(n1*n2);
//     break;
//     case "/":
//     console.log(n1/n2);
//     break;
//     case "%":
//     console.log(n1%n2);
//     break;
 
// }


// q3

/*
Switch with Multiple cases 
CASE 1: HTML, CSS, JAVASCRIPT - Frontend 
CASE 2: NODEJS, ExpressJS - Backend
CASE 3: “Not in list”
*/


// var dev= 'expressjs';
// dev=dev.toUpperCase()

// switch (dev) {
//   case 'HTML':
//   case 'CSS':
//   case 'JAVASCRIPT':
//   console.log('front-end');
//   break;
//    case 'NODEJS':
//    case 'EXPRESSJS':
//    console.log('Backend');
//    break;
//    default:
//    console.log("Not in list");
  
//   }


