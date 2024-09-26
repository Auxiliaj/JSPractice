console.log(10/2);
console.log(10/0);
console.log(10/0.0);
console.log("rest"/0);
console.log(10/null);
console.log(10/undefined);

let result=10+10+"answer";
console.log(result);

let result1="answer"+10+19;
console.log(result1);

let add= "4"+4;
console.log(add);

let sub="4"-4;
console.log(sub);

console.log(20/true);
console.log(30/false);

console.log("5"*4);
console.log("Multiply"*3);

//== and === operator

let num=60;
let string="60";
console.log(typeof num);
console.log(typeof string);

if(num==string){
    console.log("Matching");
}else{
    console.log("Not matching");
}

if(num===string){
    console.log("Matching");
}else{
    console.log("Not matching");
}

//logical operators
console.log(40>8);
console.log(23<1);
console.log(13>=13);
console.log(34>9 && 67>2);
