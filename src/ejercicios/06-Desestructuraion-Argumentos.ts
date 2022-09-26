import { ResolvedTypeReferenceDirectiveWithFailedLookupLocations } from "typescript";

/*
    ===== Código de TypeScript =====
*/

/* desestructuración de argumentos */
//creo una interfaz de Producto
export interface Producto{
    descripcion: string;
    precio: number;
}

//creo dos Productos
const telefono: Producto = {
    descripcion: 'Nokia A1',
    precio: 50
}

const tablet: Producto = {
    descripcion: 'iPad Air',
    precio: 350
}

//agregamos un funcion calcular impuestos sobre venta
//--> viene de la linea 48: cambio el tipo de retorno de number a [number, number]
export function calcularISV(productos: Producto[]): [number, number]{
    let total = 0;

    // aca podemos ver como se aplica la desestructuracion en parametros en ( producto )
    //se aplica dentro del parentesis se abren llaves y se nombra el valor de la variable a usar
    productos.forEach( 
        //sin desestructuracion ( producto )
         /* ( producto ) => { */

        //con desestructuracion ({ precio })
        ( { precio } ) => {

        //sin desestructuracion --> producto.precio
            /* total += producto.precio */
        //con desestructuracion --> precio    
        total += precio;        
    });

    //return total * 0.15;

    //tambien puedo retornar un arreglo y desestructurar en donde recibo la respuesta
    //para ello debo cambiar el tipo que retorno --> linea 26
    return [ total, total*0.15]
}

//creo mi arreglo
const articulos = [telefono, tablet];

//llamo a la funcion y le paso por parametro mi arreglo
//const impuestoSobreVenta = calcularISV(articulos);
//ahora puedo desestructurar la respuesta
const [total, impuestoSV] = calcularISV( articulos );


console.log('Total: ', total)
console.log('Impuesto sobre venta: ', impuestoSV );