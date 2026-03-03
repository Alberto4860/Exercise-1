//López Pérez Juan Alberto  ID:4860
//Exercise 1 - Build an Array Using a While Loop
/*
-.Primero declarare 2 variables, una que sera el Array y otra que servira como un contador 
-.Despues de ello empezare el loop while, utilizando el contador, que sera a "i < 20" 
-.Dentro de ahi escribire el array.push(i + 1) y agregare un "contador++" para que pueda salir del loop 
-.Una vez se llenen los 20 numeros, al final utilizare un console.log para imprimir el array.
*/

let array = []
let i = 0

while(i<20){
  array.push(i+1)
  i++
}
console.log(array)
