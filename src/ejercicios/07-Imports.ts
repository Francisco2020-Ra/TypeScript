import { calcularISV, Producto } from "./06-Desestructuraion-Argumentos";
/*
    ===== Código de TypeScript =====
*/



//manejando los imports 
const carritoCompras: Producto[] = [
    {
        descripcion: 'Telefono 1',
        precio: 150
    },
    {
        descripcion: 'Telefono 2',
        precio: 200
    },
];

const [total, isv] = calcularISV(carritoCompras);

console.log('Total: ', total);
console.log('ISV: ', isv);