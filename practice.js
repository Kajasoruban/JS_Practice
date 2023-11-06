//array intro

// let num=[1,2,3,47,5,6,"7"]
// console.log(num);
// console.log(num[6]);
// num[3]=4;
// num[7]=8;
// console.log(num);
// console.log(num.indexOf("7"));

//sub aray

// let arar =[2,[1,2,3],["name","kajan"]];
// console.log(arar.indexOf("kajan"));
// console.log(arar[2][1]);

//empty array

// let emp =[];
// emp[99]=100;
// console.log(emp);

//tostring,join,pop,push,shift,unshift

// let int =[1,2,3,4,5];
// let str = int.toString();
// console.log(str);
// let str1=int.join(" and ");
// console.log(str1);

// let last = int.pop();
// console.log(int);
// console.log(last);

// int.push(6,7,8,9,'10');
// console.log(int);

// let first = int.shift();
// console.log(int);
// console.log(first);

// int.unshift(1);
// console.log(int);


//sort and reverse

// let alp =['c','b','d','e','a'];
// alp.sort();
// console.log(alp);
// alp.reverse();
// console.log(alp);

// let numb = [1,4,6,3,2,5];
// numb.sort();
// console.log(numb);
// numb.reverse();
// console.log(numb);

// array won't be equal or strict equal to another array with same value but will be equal if we assign same array to that variable

// let f=[1,2,3];
// let g=f;
// console.log(f===g);

// let d =5;
// let hi=()=>{var d=10;  console.log(d)};
// hi();
// console.log(d);

//                                __  |++|  __
//  freecodecamp practice     \--(00)_/  \_(00)--/
//                                )(        )(   
//                    


// function checkObj(obj, checkProp) {
//     // Only change code below this line
//     return obj.hasOwnProperty(checkProp)?obj[checkProp]:"Not Found";
//     // Only change code above this line
//   }

//   console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));


// Setup
// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
 
  // Only change code below this line
//   function updateRecords(records, id, prop, value) {
//     if(value==''){
//         delete records[id][prop];
//     }else if(prop!='tracks'){
//         records[id][prop]=value;
//     }else if(records[id].hasOwnProperty('tracks')){
//         records[id][prop].push(value);
//     }else{
//         records[id][prop]=[];
//         records[id][prop].push(value);
//     }
  
//     return records;
//   }
  
//   console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


// Your function must always return the entire records object.
// If value is an empty string, delete the given prop property from the album.
// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First,
//  if the album does not have a tracks property, assign it an empty array. 
//  Then add the value as the last item in the album's tracks array.

// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }


// function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
//     }
//   }

// console.log(multiply([1,2,3,4],4));


// function sum(arr, n) {
//     // Only change code below this line
//     // return n<=0?0:sum(arr,n-1)+arr[n-1];
//     if(n<=0){
//       return 0;
//     }else{
//       return sum(arr,n-1)+arr[n-1];
//     };
    
//     // Only change code above this line
//   }

// console.log(sum([2, 3, 4, 5], 3));


// Setup
/*
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i=0;i<contacts.length;i++){
  
      if(contacts[i].firstName===name){
  
        if(contacts[i].hasOwnProperty(prop)){
                          return contacts[i][prop];
                      }else{
                          return 'No such property';
                      };
      }else{
         if(i==contacts.length-1){
           return "No such contact";
         }
      }
  
    }


  
    // Only change code above this line
  }

  */
  
//   console.log(lookUpProfile("Akira", "likes"));


/*We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and
 the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return
 the string No such property.

*/

// function a(max,min){

// return Math.floor(Math.random() * (max - min + 1)) + min;

// }
// console.log(a(5,2));


// function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//       const countArray = countup(n - 1);
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(5));



//   function rangeOfNumbers(startNum, endNum) {
//     if(endNum-startNum<0){
//       return [];
//     }else{
//       const rangeArr=rangeOfNumbers(startNum, endNum-1);
//       rangeArr.push(endNum);
//       return rangeArr
//     }
//   };

// console.log(rangeOfNumbers(4, 6));

//        __  |++|  __
//    \--(00)_/  \_(00)--/    The End of first segment of js in FCC
//        )(        )(   
//   