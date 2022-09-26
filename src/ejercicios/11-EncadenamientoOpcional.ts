import { ResolvedTypeReferenceDirectiveWithFailedLookupLocations } from "typescript";


/*
    ===== Código de TypeScript =====
*/
/* Encadenamiento opcional */

interface Pasajero{
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Natalia' , 'Gabriel']
}

function imprimeHijos(pasajero: Pasajero ): void{
    
    //para que no genere errores por el pasajero1
    //debemos agregar el signo ? a hijos, quedando pasajero.hijos?.length
    //este signo implica que es opcional que tenga o no hijos
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( cuantosHijos );
}

imprimeHijos( pasajero1 );