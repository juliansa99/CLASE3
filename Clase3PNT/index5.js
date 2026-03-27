//EJ A

const saludar = (nombre) => "Hola, " + nombre + "!";
console.log(saludar("Julian"))

//EJ B
const cuadrado = (n) => n*n
console.log(cuadrado(2))

//EJ C
const mayor = (a,b) =>  a > b ? a : b
console.log(mayor(8,6))

//EJ D
const cuadrados = (numeros) => numeros.map(n => n * n);
console.log(cuadrados([1, 2, 3, 4, 5]));
