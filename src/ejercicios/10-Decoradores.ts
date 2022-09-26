import { ResolvedTypeReferenceDirectiveWithFailedLookupLocations } from "typescript";


/*
    ===== Código de TypeScript =====
*/
/* Decoradores en TypeScript */

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

//para trabajar con decoradores en el archivo tsconfig.json debemos descomentar la propiedad "experimentalDecorators": true,  en la linea 60
@reportableClassDecorator
class MiSuperClase{
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola mundo');
    }
}

console.log( MiSuperClase );

//creamos una instancia de la clase
const miSuperClase = new MiSuperClase();

console.log( miSuperClase.miPropiedad );