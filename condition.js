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
function greater() {

let a = 5;
let b = 4;
a>b ? console.log(a+" is greater than "+b):console.log(a+" is less than "+b);

}

// q4

function score() {

let score= 75;

score>=80? console.log('A'):
score>=70? console.log('B'):
score>=60? console.log('C'):
score>=50? console.log('D'):
score>=0? console.log('F'):
console.log('Invalid Score');

}


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


// q function

// q1

function fullName(){

    console.log("Muralitharan Kajasoruban");
}

fullName();

//q2

function fullNamee(firstName,lastName) {
    return firstName+lastName;

}

console.log(fullNamee("Muralitharan"," Kajasoruban"));

//q3

function addNumber(a,b) {
    let sum = a+b;
    return 'sum is '+sum;
}

console.log(addNumber(40,7));

//q4

function areaOfRectangle(length,width) {
    let area = length * width;
    return 'area is '+area;


}

console.log(areaOfRectangle(4,5));

//q5

function perimeterOfRectangle(length,width) {
    let perimeter = 2*(length + width);
    return 'perimeter is '+perimeter;
}

console.log(perimeterOfRectangle(5,4));

//q6

// function volumeOfRectPrism(length,width,height) {
//     let volume = length * width * height;
//     return 'volume is '+volume;
// }

// console.log(volumeOfRectPrism(4,5,6));


//or1

let volumeOfRectPrism =(length,width,height) => 'volume is '+length * width * height;
console.log(volumeOfRectPrism(5,6,7));

//q7

// function areaOfCircle(r) {
//     let area = Math.PI * r * r ;
//     return 'area of circle is '+area;
// }
// console.log(areaOfCircle(3));

//or2

let areaOfCircle=(r)=>'area of circle is '+Math.PI * r * r ;
console.log(areaOfCircle(3));

//q8

// function circumOfCircle(r) {
//     let circumference = 2*Math.PI*r;
//     return 'circumference is '+circumference;
// }

// console.log(circumOfCircle(5));

//or3

let circumOfCircle=(r)=>'circumference is '+2*Math.PI*r;
console.log(circumOfCircle(5));

//q9

// function convertCelsiusToFahrenheit(oC) {
//     let oF = (oC * 9/5) + 32 ;
//     return oF+'°F';
// }

// console.log(convertCelsiusToFahrenheit(30));

//or4

let convertCelsiusToFahrenheit=(oC)=>(oC * 9/5) + 32 +'°F';
console.log(convertCelsiusToFahrenheit(30));

//q10

// function  bmi(weight,height) {
//     let  bmi = weight / (height * height);
//     // let bmi = 30;
//     let output = null;
//     // return bmi;
//     18.5>bmi ? output ='Underweight':
//     24.9>bmi ? output ='Normalweight':
//     29.9>bmi ? output ='Overweight':
//     output = 'Obese';
//     return output;

// }

// console.log(bmi(60,1.7));

//or5

let bmi=(weight,height) => 18.5>(weight / (height * height) ) ? 'Underweight': 
    24.9>(weight / (height * height)) ? 'Normalweight':29.9>(weight / (height * height) ) ? 'Overweight': 'Obese';

console.log(bmi(60,1.7));


// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more