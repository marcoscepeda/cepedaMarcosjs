// COMPRA DE DOLARES

let cantidad = parseInt( prompt("Ingrese la cantidad de dolares que desea comprar: "));
const dolarOficial = 145.90;
const impPais = 0.35;
const impGanancia = 0.30;

while((cantidad <= 0) || (cantidad > 200) ){
    cantidad = parseInt( prompt("la cantidad debe ser mayor a 0 y menor al cupo de 200 dolares: "));
}

let cantidadFinal = (a , b) => a * b;
let impuestoPais = (a , b) => a * b;
let antiGanancia = (a , b) => a * b;

console.log("Compra de dolares: ");
console.log("Con " + cantidad + " dolares debe pagar = " + cantidadFinal(cantidad , dolarOficial) + " $Argentinos.");
console.log("Impuesto Pais 35% = " + impuestoPais(cantidadFinal(cantidad , dolarOficial) , impPais) + " $Argentinos.");
console.log("Anticipo de Ganancias 30% = " + antiGanancia(cantidadFinal(cantidad , dolarOficial) , impGanancia) + " $Argentinos.");

let total = cantidadFinal(cantidad , dolarOficial) + impuestoPais(cantidadFinal(cantidad , dolarOficial) , impPais) + antiGanancia(cantidadFinal(cantidad , dolarOficial) , impGanancia) ;

console.log("Total por abonar para la compra de " + cantidad + " dolares = " + total + " $Argentinos." );

alert("Gracias por su compra");
