//EJ A
const frutas = [
  "manzana", "banana", "naranja", "pera", "durazno"
];

frutas.splice(0, 0, "anana")
frutas.push("sandia")

console.log(frutas)
//El splice pones la pos donde lo queres agregar, cual elemento queres eliminar y lo q agregar
//El push agrega el elemento en el final del array

//EJ B

const numeros = [1, 2, 3, 4, 5];
const dobles = [];

for (let i = 0; i < numeros.length; i++) {
    dobles.push(numeros[i] * 2);
}

console.log(dobles);
//El push va agregando al array dobles el doble de cada numero cuando itera

//EJ C

const colores = [
  "rojo", "blanco", "negro"
];

const colores2 = [
  "azul", "naraja"
];

const c = colores.concat(colores2)
console.log(c)

//El concat une los dos arrays en uno

const seisElementos = [
  1, 2, 3, 4, 5, 6
];

seisElementos.pop()
seisElementos.splice(0, 1)
console.log(seisElementos)

//El pop elimina el ultimo elemento del array. El splice le decis desde donde borra y cuantos elementos
//Si yo pusiera (1,2) me borra el 2 y el 3

