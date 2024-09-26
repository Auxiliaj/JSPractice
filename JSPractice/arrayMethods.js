//every
let array=[1,2,4,5,6,7];
let flag=array.every((e) => e<10);
console.log(flag);

//some
let arrayNum=[1,2,3,6,9];
let big=arrayNum.some((i) => i>10);
console.log(big);
//find
let evenArray=[1,3,4,6,9];
let evenNumber=evenArray.find((k) => k % 2===0);
console.log(evenNumber);

//indexof
let fruits=["Apple","Orange","pear","cherry"];
let index=fruits.indexOf("pear");
console.log(index);

//lastIndexOf
let fruitArray= ["Apple","Orange","pear","Orange","cherry"];
let last=fruitArray.lastIndexOf("Orange");
console.log(last);

//reverse
let reverseArray=fruits.reverse();
console.log(reverseArray);

//sort
let toSort=["Apple","Orange","pear","cherry","1mango"];
let sortedArray=toSort.sort();
console.log(sortedArray);



