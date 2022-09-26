import { ResolvedTypeReferenceDirectiveWithFailedLookupLocations } from "typescript";


/*
    ===== Código de TypeScript =====
*/

/* clases en TypeScript */
//viendo herencias
class PersonaNormal{

    constructor(
        public nombre: string,
        public direccion: string
        ){}
}

class Heroe extends PersonaNormal{
    //Estas variables no son necesarias ya que se definen en el argumento del constructor con sus
    //respectivos modificadores de acceso.
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    //Agregando constructor y variables locales con modificar de acceso publico
    //notar que no es necesario declarar las variables como locales
    //sino que las podemos declarar como argumentos del constructor con sus respectivos modificadores de acceso
    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ){
        super(nombreReal, ' New York, USA');
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony');

console.log( ironman );