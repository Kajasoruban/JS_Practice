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


