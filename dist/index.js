"use strict";
let age = 5;
const firstName = "Lucio";
const isValid = true;
let idk = 5;
idk = "12";
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["Lucio", "Catarinna", "Heloiza"];
// Tupla
const person = [1, "Lucio"];
//Lista de Tuplas
const people = [
    [1, "Lucio"],
    [2, "Catarinna"],
    [3, "Heloiza"],
];
//Intersections
const productId = "1";
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
const direction = Direction.Left;
// Type Assertions
const productName = "Mouse";
// let itemId = productName as string;
let itemId = productName;
console.log(direction);
