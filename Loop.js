//loop

//for loop

// for (let num =1; num<=5; num+=1){
//     console.log(num);
// };


// 1.Create a for loop to print “Hi John” 5 times in the console.

// for (let n=1,a=`Hi John`+"<br>"; n<=5; n+=1){
    
//     document.write(a);
//     // console.log(a);
// };

// 2.Use While loop to print 0-10 in console.

// let n2=0;
// while(n2<=10){
//     console.log(n2);
//     n2++
// }

// 3.Find the Square Number from 1-10 


// for (let i = 1; i <= 10; i++) {
//   const square = i * i;
//   console.log(`The square of ${i} is ${square}`);
// }


// 4.Use for loop to iterate from 0 to 100 and print only even numbers

// for(let i=1;i<=100;i++){
//   if(i%2===0){
//     console.log(i);
//   }
// }

// 5.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//   Output: The sum of all numbers is 5050.

// var sum=0;
// for(let i=1;i<=100;i++){
//     sum += i;
// }
// console.log(sum);

// 6.Find Odd number between two numbers m,n 

// let m=2,n=10;


// for(let i=m;i<=n;i++){
    
//   if(i%2!=0){
//     console.log(i);
//   }
  
// }


// 7.Define the Array fruit and add your four favourite fruits and print its value only 

// let fruit=[];
// fruit.push("apple");
// fruit.push("pineapple");

// console.log(fruit);

// 8.Define the string “learn JavaScript” and separate every letter using comma (,)

// let str="learn JavaScript";
// console.log(str.split(''));

//9. Write a loop that makes seven calls to console.log to output the following triangle:

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

// var i=7;
// var c=1;

// while(c<=i){
//   let b=1;
//   var x='';
//   while(b<=c){
//     x+="#";

//     b++
//   }
//   c++
//   console.log(x);
// }


// 10.Iterate through all numbers from 1 to 45. Print the following:
// For multiples of 3, print "Puppy.”
// For multiples of 5, print "Pet.”
// For multiples of 3 and 5, print "PuppyPet.”

// for(let i=1;i<=45;i++){
//     if(i%3==0){
//         if(i%3==0 && i%5==0){
//             console.log("Puppypet");
//         }else{
//         console.log("Puppy");
//         }
//     }else if(i%5==0){
//         if(i%3==0 && i%5==0){
//             console.log("Puppypet");
//         }else{
//         console.log("pet");
//         }
//     }
// }



