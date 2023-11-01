// q function

// q1

// function fullName(){

//     console.log("Muralitharan Kajasoruban");
// }


let fullName=()=>"Muralitharan Kajasoruban";



fullName();

//q2

// function fullNamee(firstName,lastName) {
//     return firstName+lastName;

// }


let fullName2=(firstName,lastName)=>firstName+lastName;


console.log(fullName2("Muralitharan"," Kajasoruban"));


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

let bmi=(weight,height)=>{ bm1=weight / (height**2); return 18.5>bm1? 'Underweight':
24.9>bm1 ? 'Normalweight':29.9>bm1 ? 'Overweight': 'Obese';}

console.log(bmi(60,1.7));




// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more