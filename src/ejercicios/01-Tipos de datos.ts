
/*
    ===== Código de TypeScript =====
*/

/* declarando variables */
let nombre: string = 'Strider';
let hp: number = 123;

/* declarando constantes */
const nombreConstante = 'strider';

nombre = 'Francisco';


/* En typeScript no podemos cambiar el tipo de la variabla
si deseamos cambiar a numero el valor de nombre nos arroja un error ej:
nombre = 123 --> no se puede hacer
en cambio en JavaScript si se puede cambiar el tipo de datos*/
console.log( nombre , hp );

/* para que una variable pueda recibir otro tipo de dato se utiliza el operador | */
/* de igual forma si le paso otro tipo de dato por ej: un objeto o un array se va a quejar */
let hpNumbreOString : number | string = 123;

console.log( hpNumbreOString );

hpNumbreOString = 'Recibo un String'

console.log( hpNumbreOString );


