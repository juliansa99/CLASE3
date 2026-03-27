// EJ A
let persona = { nombre: "Julian", edad: 21, ciudad: "BsAs" }
let {nombre, edad} = persona

console.log(nombre)
console.log(edad)

// EJ B
let personaa = { nombre: "Julian", edad: 21, ciudad: "BsAs" }
function mostrarInfo({ nombre, edad }) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`)
}
mostrarInfo(persona);

// EJ C
let ciudad = ["Buenos Aires", "Argentina", 3000000];
let [nombres, pais, poblacion] = ciudad;

console.log(nombres)
console.log(pais)
console.log(poblacion)