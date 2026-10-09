let rectXmin = Number(prompt("Прямокутник: введіть ліву межу (Xmin):"));
let rectXmax = Number(prompt("Прямокутник: введіть праву межу (Xmax):"));
let rectYmin = Number(prompt("Прямокутник: введіть нижню межу (Ymin):"));
let rectYmax = Number(prompt("Прямокутник: введіть верхню межу (Ymax):"));

let smugaX1 = Number(prompt("Вертикальна смуга: введіть ліву межу (X1):"));
let smugaX2 = Number(prompt("Вертикальна смуга: введіть праву межу (X2):"));

let tochkaX = Number(prompt("Точка: введіть координату X:"));
let tochkaY = Number(prompt("Точка: введіть координату Y:"));


let realRectXmin = Math.min(rectXmin, rectXmax);
let realRectXmax = Math.max(rectXmin, rectXmax);
let realRectYmin = Math.min(rectYmin, rectYmax);
let realRectYmax = Math.max(rectYmin, rectYmax);

let realSmugaX1 = Math.min(smugaX1, smugaX2);
let realSmugaX2 = Math.max(smugaX1, smugaX2);

let vPryamokutniku = (tochkaX >= realRectXmin) && (tochkaX <= realRectXmax) &&
    (tochkaY >= realRectYmin) && (tochkaY <= realRectYmax);

let vSmuzi = (tochkaX >= realSmugaX1) && (tochkaX <= realSmugaX2);

let vPeretyni = vPryamokutniku && vSmuzi;

console.log("Координати точки: (" + tochkaX + ", " + tochkaY + ")");
console.log("Точка в прямокутнику: " + vPryamokutniku);
console.log("Точка у смузі: " + vSmuzi);
console.log("Точка у перетині фігур: " + vPeretyni);

if (vPeretyni) {
  alert("Точка (" + tochkaX + ", " + tochkaY + ") ПОТРАПЛЯЄ у перетин прямокутника та смуги!");
} else {
  alert("Точка (" + tochkaX + ", " + tochkaY + ") НЕ потрапляє у перетин фігур.");
}