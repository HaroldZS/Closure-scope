// Var

var firstName; // Undefined
firstName = "Oscar";
console.log(firstName);

var lastName = "David"; // Declarar y asignar
lastName = "Ana"; // Reasignar
console.log(lastName);

var secondName = "David"; // Declarando y asignando
var secondName = "Ana"; // Reasignando
console.log(secondName);

// Let

let fruit = "Apple"; // Declarar y asignar
fruit = "Kiwi"; // Reasignar
console.log(fruit);

/* 
let fruit = 'Banana';
Ya no se puede redeclarar con let 
*/

// const

const animal = "dog"; // Declarar y asignar

/*
animal = 'cat'; // Reasignar
No se permite reasignar con const

const animal = "snake";
NO se permite redeclarar con const
*/

console.log(animal);

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);
vehicles.pop();
console.log(vehicles);