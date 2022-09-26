import { ResolvedTypeReferenceDirectiveWithFailedLookupLocations } from "typescript";

/*
    ===== Código de TypeScript =====
*/
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor={
    volumen: 90,
    segundo: 36,
    cancion: "Ojitos Lindos",
    detalles: {
        autor: "Bad Bunny",
        anio: 2021
    }
}

//sin desestructuracion 

console.log('El volumen actual es: ', reproductor.volumen);
console.log('El segundo actual es: ', reproductor.segundo);
console.log('La cación actual es: ', reproductor.cancion);
console.log('El autor actual es: ', reproductor.detalles.autor);

//hacemos la desestructuracion de objetos
//en este tipo de desestructuración se tiene en cuenta el nombre de las variables
const {volumen, segundo, cancion, detalles} = reproductor;
const { autor } = detalles;

console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La cación actual es: ', cancion);
console.log('El autor actual es: ', autor);


/* desestructuración de arreglos */

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
//hacemos la desestructuracion
//en este tipo de desestructuración se tiene en cuenta la posicion de los datos
//el nombre de las posiciones puede ser cualquiera
const[goku, vegeta, trunks] = dbz;

console.log('El personaje nro 1 es: ', goku);
console.log('El personaje nro 2 es: ', vegeta);
console.log('El personaje nor 3 es: ', trunks);