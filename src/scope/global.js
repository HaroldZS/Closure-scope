// Variables

var a; // Declarando
var b = "b"; // Declaramos y asignamos

b = "bb"; // reasignación
var a = "aa"; // redeclaración

// Global scope
var fruit = "Apple"; // Global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();
