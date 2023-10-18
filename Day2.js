//1.Declare a variable named challenge and assign it to an initial value 'learn Javascript'.

let challenge = "learn Javascript";

//2.Print the string on the browser console using console.log()

console.log(challenge);

//3.Print the length of the string on the browser console using console.log()

console.log(challenge.length);

//4.Change all the string characters to capital letters using toUpperCase() method

console.log(challenge.toUpperCase());

//5.Change all the string characters to lowercase letters using toLowerCase() method

console.log(challenge.toLowerCase());

//6.Cut (slice) out the first word of the string using substr() or substring() method

console.log(challenge.substring(6));

//7.Slice out the phrase Days Of JavaScript from learn Javascript.

console.log(challenge.slice("Days Of JavaScript"));

// 8.Check if the string contains a word Script using includes() method

console.log(challenge.includes("Script"));

// 9.Split the string into an array using split() method

console.log(challenge.split());

// 10.Split the string learn Javascript at the space using split() method

let str ="learn Javascript";

console.log(str.split(''));

// 11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let social ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(social.split(','));


// 12.Change learn Javascript to 30 Days Of Python using replace() method.

let str2 =str.replace("learn Javascript", "30 Days Of Python");
console.log(str2);


// 13.What is character at index 15 in 'learn Javascript' string? Use charAt() method.

console.log(str.charAt(15));


// 14.What is the character code of J in 'learn Javascript' string using charCodeAt()

console.log(str.charCodeAt("j"));


// 15.Use indexOf to determine the position of the first occurrence of a in learn Javascript

console.log(str.indexOf("a"));

// 16.Use lastIndexOf to determine the position of the last occurrence of a in learn Javascript.

console.log(str.lastIndexOf("a"));


// 17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sent ='You cannot end a sentence with because because because is a conjunction';
console.log(sent.indexOf("because"));


// 18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sent.lastIndexOf("because"));


// 19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sent.search("because"));


// 20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' learn Javascript '.

let str3 = ' learn Javascript ';
console.log(str3.trim(''));

// 21.Use startsWith() method with the string learn Javascript and make the result true

console.log(str.startsWith("l"));

// 22.Use endsWith() method with the string learn Javascript and make the result true

console.log(str.endsWith("t"));


// 23.Use match() method to find all the a’s in learn Javascript

console.log(str.match(/a/gi));

// 24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, 'learn Javascript'

console.log(str.concat(' 30 Days of',' JavaScript'));

// 25.Use repeat() method to print learn Javascript 2 times

console.log(str.repeat(2));








