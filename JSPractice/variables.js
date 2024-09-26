var x=5;
function test(){
    var y=10;
}
console.log(x);

var top="Hello JS";
function pop(){
    var pep="Hello world";
    console.log(pep);
}
pop();
console.log(top);
//Can Redeclare a value with var key in java script. It will consider last value
var browser="Firefox";
var browser="Chrome";
//Can reintialize a value with var key
browser="Edge";
console.log(browser);
//JavaScript will assign the undefined value for directly with var keyword
var d;
console.log(d);  

//var will consider latest value when we are giving any condition, even it fails it will print least value only
//so we are not using var
//ex
var comp="Dell";
var t1=5;
if(t1 > 3){
    var comp="Lenovo";
    console.log(comp);
}


//let-most preffered
//if we declare let inside a block {} it has scope within that block
//If we declare globally we can access from anywhere
let m="HWRU";
let time=4;
if(time < 2){
    let mesg="Hello";
    console.log(mesg);

}else{
    console.log(m);
}


//let can be reintialized, but cant be redeclared

let len=5;
len=4;

//Const
const y="Hey";
//y="Who";
console.log(y);

