//EJ A
let uno = [1, 2, 3];
let dos = [4, 5, 6];

let combinado = [...uno, ...dos];

let suma = combinado.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma);

//EJ B
let numeros = [3, 7, 1, 9, 4];
let maximo = Math.max(...numeros);
console.log(maximo);

//EJ C
let persona = { nombre: "Julian", edad: 21 };
let trabajo = { profesion: "Estudiante", ciudad: "BsAs" };
let combinados = {...persona, ...trabajo };
console.log(combinados);

//EJ D
let array = [[1], [2, 3], [4]];
let unir = array.reduce((acc, elemento) => [...acc, ...elemento], []);
console.log(unir);