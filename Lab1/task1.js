let A = prompt("Введіть значення A:");
let B = prompt("Введіть значення B:");
let C = prompt("Введіть значення C:");
let D = prompt("Введіть значення D:");
let E = prompt("Введіть значення E:");

console.log("--Початкові Значення--");
console.log(`A = ${A}, B = ${B}, C = ${C}, D = ${D}, E = ${E}`);

let temp = A;
A = E;
E = D;
D = C;
C = temp;

console.log("-- Результат (EBACD) --");
console.log(`A = ${A}, B = ${B}, C = ${C}, D = ${D}, E = ${E}`);

alert(`Результат (EBACD):\nA = ${A}, B = ${B}, C = ${C}, D = ${D}, E = ${E}`);

