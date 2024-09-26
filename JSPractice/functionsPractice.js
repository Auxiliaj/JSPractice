// //1.function declaration
// function add(a,b){
//     return a+b;
// }
// const sum=add(4,6);
// console.log(sum);

// //2.function expression
// const multiply=function(a,d){
//     return a*d;
// }
// const result=multiply(4,9);
// console.log(result);

// //3.Arrow functions/arrow function expression
// const division= (num1,num2) => num1/num2;
// const ans=division(25,5);
// console.log(ans);

// //4.function constructor 
// const subtraction=new Function('a','b','return a-b;');
// const sub=subtraction(9,6);
// console.log(sub);
// //5.immediately invoke function expression
// (function(){
//     console.log("Hello guys");

// })();

// //6.generator function
// //function* and yield keyword

// function* generate(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;

// }

// const generator=generate();
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

// //7.Anonymous function
// // const numbers=[1,2,3,4,5,6];
// // const squareRoot= numbers.map(function(e){
// //     return e * e;
// // }
// // );
// // console.log(squareRoot);

// const numb=[1,3,5,7,9];
// const square=numb.map((e) => {
//     return e*e;
// }

// );
// console.log(square);

// //8.Recursive function
// function recursion(n){
//     if (n===0 || n===1){
//         return 1;
//     }else{
//         return n*recursion(n-1);
//     }
// }
// console.log(recursion(3));

//9.Higher order function
function add(a,b){
    return a*b;
}

function adding(funName,a,b){
    return funName(a,b);
}
let result=adding(add,10,8);
console.log(result);
