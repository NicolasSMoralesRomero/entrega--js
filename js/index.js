let vDolarVenta = 1015; //La casa de cambio vende a este precio
let vDolarCompra = 995; //La casa de cambio compra a este precio
let pesos;
let operacion;
let res;

do {
    do {
        operacion = prompt("Ingrese la operacion deseada:\n1 para Compra\n2 para Venta\n0 para salir");
    } while (
        operacion != "1" &&
        operacion != "2" &&
        operacion != "0"
    );
    if (operacion != '0') {
        do {
            pesos = Number(prompt("Ingrese el monto a operar"));
        } while (isNaN(pesos));


        switch (operacion) {
            case "1":
                res = pesos / vDolarVenta;
                break;
            case "2":
                res =  pesos / vDolarCompra;
                break;
        }
        alert("El resultado es: " + res);
    }
} while (operacion != "0");

let carrito = [];

class Producto {
    constructor(pNombre, pPrecio) {
        this.nombre = pNombre;
        this.precio = pPrecio;
    }
     }

