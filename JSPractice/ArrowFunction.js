//arrow function
const square=num => num * num;
console.log(square(4));
//without arguments
const msg= () => 'Hello Guys';
console.log(msg());

//with objects
const person={
    Firstname:'Auxilia',
    Lastname:'Rosely'
}
const getFullName= person => `${person.Firstname} ${person.Lastname}`
const fullName=getFullName(person);
console.log(fullName);