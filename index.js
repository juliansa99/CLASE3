//EJ A
let edad = 26
const nombre = "Julian"
edad = 25

// Let y const
// El let me deja reasignar un valor sin problema. El CONST te da error, porque const impide reasignar variable


//EJ B
let contador = 0

for (let i = 0; i < 5; i++){
    contador++
}
console.log(contador)
//Con LET funciona bien, con CONST te da error porque se esta reasignando la variable contador

//EJ C

const persona ={
    nombre: "Julian",
    apellido: "Saal",
    edad: 26,
    ocupacion: "Estudiante",
    hobbie: ["futbol", "tenis", "paddle"]
}

persona.edad = 27;
console.log(persona.edad)

//Me lo deja cambiar porque esta permitido cambiar una propiedad de un CONST
//si yo pongo persona = "Julian" me da error

//EJ D
function imprimirVariables(){
    var variableVar = "Soy var"
    let variableLet = "Soy Let"
    const variableConst = "Soy Const"

    console.log(variableVar)
    console.log(variableLet)
    console.log(variableConst)
}

imprimirVariables()
    //console.log(variableVar)
    //console.log(variableLet)
    //console.log(variableConst)

//Fuera del bloque da error. Dentro del bloque imprime las 3 variables