//function Proto() {
    // Crea un objeto
    // Luego crea otro objeto en donde el sea su padre y ademas se cree como nuevo objeto
    // Pista, utilizar: __proto__
    // Tu código:
//}
var Objeto = { 
    nombre: 'objeto 1', 
    caracteristicas : "objeto de practica" }

var juan =  { 
    nombre: "Juan", 
    caracteristicas: "alumno"}

juan.__proto__ = Objeto
console.log (juan.nombre)
console.log (juan.caracteristicas)


function agregarMetodoPrototype(Constructor) {
    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:
    this.saludar = "hello World!"
}
agregarMetodoPrototype.prototype.saludar = function(){
	return this.saludar
}
var agregarMetodoPrototypeobj = new agregarMetodoPrototype()
console.log(agregarMetodoPrototypeobj.saludar)



//function agregarStringInvertida() {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'joaco'.reverse() => 'ocaoj' 
    // Pista: Necesitarás usar "this" dentro de "reverse"
    
//}

class string{constructor(string) {
    this.string = string
}
reverse(){
    var string = this.string
    var divididos = string.split("")
    var invertido = divididos.reverse()
    var juntosinvertidos = invertido.join("")
    return juntosinvertidos
}
}
var alrevez = new string('Juan')
console.log(alrevez.reverse())



function changeNombre() {
    // Crea un objeto
    // Agregar un getNombre()
    // Agregar un changeNombre()
    // Mostrar por consola changeNombre() y getNombre(), con nombre distinto en changeNombre() al del constructor y al del getNombre()
    // Tu código:
}



//function Object() {
    // Crea un objeto
    // Luego crea otro objeto en donde el sea su padre y ademas se cree como nuevo objeto
    // Utilizar obligatoriamente el Metodo Object
    // Tu código:
//}
const Juan = {nombre: 'Juan', alumno: true}
var luis = Object.create(Juan)
luis.nombre = 'Luis'
luis.alumno = false
console.log(luis)
