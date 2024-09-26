//different ways of declaring array
let a=array(5);
let b=newArray(1,2,3,4,5,6);
let c=[1,2,3,4,5,6];
//map
let numberArray=[1,2,3,4,5,6,7];
let newArray=numberArray.map((e) => e*2);
console.log(newArray);

//faranheat to celcius 

let faranheat=[99,190,100,90];

function faranToCelcius(fah){
    return (fah-32) * (5/9);
}

let celcius=faranheat.map(faranToCelcius);
console.log(celcius);

//filter
let numbers=[1,2,5,7,10,20,34,78,90,99,87,100,49,120];
let evenNum=numbers.filter((e) => e % 2 === 0);
console.log(evenNum);

let empArray=[
    {name:"ken", age:25, gender:"male"},
    {name:"daisy", age:22, gender:"female"},
    {name:"kevin", age:36, gender:"male"},
    {name:"Dorothy", age:37, gender:"female"},
    {name:"kristen", age:40, gender:"male"},
];

let femaleEmp= empArray.filter((emp) => {
    return empArray.gender === "female" && age >30
});

console.log(femaleEmp);
//reduce
let number=[1,2,3,4,5,6];
let sum=number.reduce((total,numb) => total+numb , 0);
console.log(sum);

//finding max number in a given array

let findMax=[23,45,89,100];
let maxNum=findMax.reduce((max,num) => {
if(num>max){
    return  num;
}else{
    return max;
}
}, findMax[0]);
console.log(maxNum);

//finding minimum number in a given array

let findMini=[23,45,89,100];
let miniNum= findMini.reduce((minimum,i) => {
    if( minimum<i){
        return minimum;
    }else
    {
        return i;
    }
},findMini[0]);
console.log(miniNum);

//total cart value

let cart=[{name:"kurta", price:500},
    {name:"Saree", price:1500},
    {name:"Lounge wear", price:400},
    {name:"jeans", price:600},
];

let totalCost=cart.reduce((total,item) =>
    total+ cart.price,0);
console.log(totalCost);