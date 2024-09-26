let days="Sunday ";
//length
let strLength=days.length;
console.log(strLength);
//slice
let sub=days.slice(0,3);
console.log(sub);
//subString
let subr=days.substring(-2,3);
console.log(subr);

let subs=days.substring(3,6);
console.log(subs);
//split
let subArray=days.split("n");
let lengtharr=subArray[1].length;
console.log(lengtharr);
console.log(subArray[1].trim().length);


console.log(strLength);
let trimmed=days.trim();
console.log(trimmed.length);

//parseint
let start='24';
let end='31';
let diff=parseInt(end)-parseInt(start);
console.log(diff);
//toString
diff.toString();
//adding string with + operator
let newWord= days +"is Holiday";
console.log(newWord);
//indexOf
let val= newWord.indexOf("day");
console.log(val);
//lastIndexOf()
let lastVal=newWord.lastIndexOf("day");
console.log(lastVal);
//charAt()
let charPlace=days.charAt(3);
console.log(charPlace);
//charCodeAt
let code=days.charCodeAt(2);
console.log(code);
//toUpperCase
let upper=days.toUpperCase();
console.log(upper);
//toLowerCase
let lower=upper.toLowerCase();
console.log(lower);
//concat
let newString=days.concat("Holiday");
console.log(newString);
//includes
let flag=newString.includes("Sunday");
console.log(flag);
//replace
let rep=days.replace("day"," flower");
console.log(rep);
//padEnd
let newPad=days.padEnd(10,"*");
console.log(newPad);
//padFirst
let firstPd=days.padStart(10,"#");
console.log(firstPd);
//startsWith
let strt=days.startsWith("S");
console.log(strt);
//endsWith
let ends=days.endsWith("o");
console.log(ends);
//repeat
let repe=days.repeat(3);
console.log(repe);
//search
let sea=newWord.search("Holiday");
console.log(sea);








