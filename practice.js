//array intro

let num=[1,2,3,47,5,6,"7"]
console.log(num);
console.log(num[6]);
num[3]=4;
num[7]=8;
console.log(num);
console.log(num.indexOf("7"));

//sub aray

let arar =[2,[1,2,3],["name","kajan"]];
console.log(arar.indexOf("kajan"));
console.log(arar[2][1]);

//empty array

let emp =[];
emp[99]=100;
console.log(emp);

//tostring,join,pop,push,shift,unshift

let int =[1,2,3,4,5];
let str = int.toString();
console.log(str);
let str1=int.join(" and ");
console.log(str1);

let last = int.pop();
console.log(int);
console.log(last);

int.push(6,7,8,9,'10');
console.log(int);

let first = int.shift();
console.log(int);
console.log(first);

int.unshift(1);
console.log(int);


//sort and reverse

let alp =['c','b','d','e','a'];
alp.sort();
console.log(alp);
alp.reverse();
console.log(alp);

let numb = [1,4,6,3,2,5];
numb.sort();
console.log(numb);
numb.reverse();
console.log(numb);






