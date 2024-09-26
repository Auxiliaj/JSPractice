//for loop
for(let i=0; i<=10; i++){
    console.log(i);
}

//for ... of loop
console.log("-----------");
const array=[1,2,3,4,5];
for (const e of array){
    console.log(e);
}

//iterating array with for loop
console.log("------------");
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

//while loop
console.log("------------");
let j=1;
while(j<=10){
    console.log(j);
    j++;
}

let flag=true;
while(flag){
    console.log(flag);
    flag=false;

}
//printing even numbers between 1 to 100
console.log("------------");
let even=2;
while(even<=100){
    console.log(even);
    even=even+2;
}

//do while
console.log("------------");
let k=1;
do{
    console.log(k);
    k++;
}while(k<=10);

//break
let num=0;
while(num<=100){
    console.log(num)
    if(num % 5 ==0){
        console.log("Hi");
        break;
    }
    num++;
}
const browser=["chrome","edge","firefox"];
for(const e of browser){
    if(e=="edge"){
        console.log("Launching Edge");
        break;
    }
}

//for... in loop
const user ={
    name:"Wesley",
    age:"29",
    city:"Swizerland"
}
for(const key in user){
    console.log(key + ":" + user[key]);
}

//for... in loop for array

const browse=["chrome","edge","firefox"];
for(const e in browse){
    console.log(browse[e]);
}