//Array declaration
let array=[];


let lang=["Java","Python","JS"];
//Push
lang.push("Php");
console.log(lang);

//pop
let number=[1,2,3,4,5,6];
console.log(number);
number.pop();
console.log(number);

//shift
let fruits=["apple","banana","papaya"];
let firstFruit=fruits.shift();
console.log(firstFruit);
console.log(fruits);

//unshift
let colors=['red','black','purple'];
colors.unshift("blue","pink");
console.log(colors);
console.log(colors.length);

//splice
let animals=['lion','dog','tiger','bear'];
animals.splice(1,1,'elephant');
console.log(animals);
//slice
let numArray=[1,2,3,4,5,6];
let subArray=numArray.slice(1,4);
console.log(subArray);
console.log(numArray);
//concat

let veggies=['carrot','chillies','capsicum'];
let newnumbers=[1,2,3,4,5];
let mixedArray=veggies.concat(newnumbers);
console.log(mixedArray);

//indexof
let duplicateArray=[1,2,3,4,5,1,90];
let index=duplicateArray.indexOf(1);
console.log(index);

// let secondIndex=duplicateArray.indexOf(1,2);
// console.log(secondIndex);

let secondIndex=duplicateArray.indexOf(1,duplicateArray.indexOf(1)+1);
console.log(secondIndex);

//includes
let testArray=["sunday","monday","tuesday"];
let elementstatus=testArray.includes("sunday");
console.log(elementstatus);

//forEach
let n=[1,2,3,4,5,6,7];
n.forEach((e )=>{
    console.log(e*2);
} )