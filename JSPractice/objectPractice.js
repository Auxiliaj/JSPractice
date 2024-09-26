let person={
    FirstName: "Joey",
    LastName: "Tribiani",
    age :34,
    FullName : function(){
       console.log( this.FirstName+this.LastName);
    }
}
console.log(person.FullName());
// console.log(person.FirstName);
// console.log(person['FirstName']);
// //modify
// person.FirstName= 'joe';
// console.log(person.FirstName);
// //add new value
// person.gender='Male';
// console.log(person);
// //delete 
// // delete person.gender;
// // console.log(person);
// //checking a value is exist or not
// console.log('gender' in person);

// //iterating object values
// for(key in person){
//    console.log( person[key]);
// }

