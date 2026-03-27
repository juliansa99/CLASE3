//EJ A
 
const libro ={
    titulo: "Hola Libro",
    autor: "Julian",
    año: 2026,
    
}

console.log(libro.titulo)
console.log(libro.autor)
console.log(libro.año)

//EJ B
const persona ={
    nombre: "Julian",
    apellido: "Saal",
    edad: 26,
    ocupacion: "Estudiante",
}

persona.edad = 27
persona.hobby = "Ver tenis"

console.log(persona)

//EJ C

const calculadora = {
    sumar: function(a, b) { return a + b; },
    restar: function(a, b) { return a - b; },
    multiplicar:function(a, b) { return a * b; },
    dividir: function(a, b) {
    if (b === 0) return "Error: no se puede dividir por cero";
    return a / b;}
};

console.log(calculadora.sumar(10, 5))
console.log(calculadora.restar(10, 5))
console.log(calculadora.multiplicar(10, 5))
console.log(calculadora.dividir(10, 0))

//EJ D

const persona2 = {
    nombre: "Julian",
    edad2: 26,
    hobby: "ver futbol"
}

const propiedad = "edad2"

console.log(persona2[propiedad])
