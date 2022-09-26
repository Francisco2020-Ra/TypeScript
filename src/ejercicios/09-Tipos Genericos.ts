import { ResolvedTypeReferenceDirectiveWithFailedLookupLocations } from "typescript";


/*
    ===== Código de TypeScript =====
*/
/* Tipos Genericos  <T> */ 

function queTipoSoy<T>(argumento: T){
    
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy( 100 );
let soyArreglo = ( [1,2,3,4,5,6] );

//tambien puedo especificar el tip

let soyExplicito = queTipoSoy<number>(123);