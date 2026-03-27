//EJ A
let numeros = [
  1, 2, 3, 4, 5, 6
]
let pares = numeros.filter((numero) => numero % 2 === 0)
console.log(pares)

//EJ B
let estudiantes = [
    { nombre: "Julian", edad: 21, calificacion: 8 },
    { nombre: "Ana",    edad: 30, calificacion: 9 },
    { nombre: "Pedro",  edad: 32, calificacion: 7 },
];

let nombresYEdades = estudiantes.map(e => ({ nombre: e.nombre, edad: e.edad }));
console.log(nombresYEdades)

//EJ C
let encontrado = nombresYEdades.find(item => item.edad > 25);
console.log(encontrado);

//EJ D
const sumaEdades = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.edad, 0);
console.log(sumaEdades)
