let x1 = Number(prompt("Введіть x1 (вершина A):"));
let y1 = Number(prompt("Введіть y1 (вершина A):"));
let x2 = Number(prompt("Введіть x2 (вершина B):"));
let y2 = Number(prompt("Введіть y2 (вершина B):"));

let sideAB = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

let perimeter = 4 * sideAB;

console.log("-- Завдання 2: Периметр ромба --");
console.log(`Вершина A: (${x1}, ${y1})`);
console.log(`Вершина B: (${x2}, ${y2})`);
console.log(`Довжина сторони ромба = ${sideAB.toFixed(2)}`);
console.log(`Периметр ромба = ${perimeter.toFixed(2)}`);

alert(
  `Ромб з вершинами A(${x1},${y1}) та B(${x2},${y2}):\n` +
  `Довжина сторони = ${sideAB.toFixed(2)}\n` +
  `Периметр ромба = ${perimeter.toFixed(2)}`
);

