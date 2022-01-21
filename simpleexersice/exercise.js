// create two variables, firstName and lastName
//concatenate the tw into a third variable called fullName
//log fullName to the console

let firstName = 'dayan alexis';
let lastName = 'manrique bonilla';

let fullName = firstName + ' ' + lastName

function greetings(name, greeting) {
    console.log(greeting + ', ' + name + '!')
}


let myPoints = 3;

//create two functions, add3Points() and removePoint(), and have them 
// add/remove points to/ from the myPoints variable

function add3Points() {
    myPoints += 3;
};

function removePoint() {
    myPoints -= 1;
};

// acll the functions to that the line below logs out 10

console.log(myPoints);