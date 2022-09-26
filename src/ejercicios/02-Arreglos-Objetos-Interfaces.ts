
/*
    ===== Código de TypeScript =====
*/

/* Arreglos */

//1. si declaramos de esta forma TypeScript infiere que el arreglo puede recibir cualquier tipo de datos
let habilidadesAny = [];

//2. en este caso, infiere que es de tipo string y nos permite agregar otros tipos de valores
//por ejemplo habilidades.push(1) --> no nos dejaria hacerlo
let habilidadesString = ['Bash', 'Counter', 'Healing'];

//3.al agregar un valor numero al arreglo, infiere que puede recibir los dos tipos de datos
let habilidadesStringONumber = ['Bash', 'Counter', 'Healing', 1];

//4. puedo especificar el tipo de dato que quiero que reciba
let habilidadesTiposEspecificos: (string | boolean | number)[] = ['Bash', 'Counter', 'Healing', 100];

//Sin embargo, lo que usualmente se utiliza es que un arreglo solo pueda aceptar un tipo de dato

/* Objetos */

const personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}


//Ejemplo hipotetico: agregar una nueva variable al objeto

// --> comentado para que no tenga errores al momento de ejecturar -- personaje.puebloNatal = 'Pueblo Resistencia';
//Se queja en tiempo de escritura, para manejar este problema se crea una interfaz para definir
//como debe ser nuestro personaje

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}
//ahora agregamos la interfaz al objeto personaje
//de igual forma se queja y por ello debemos agregar la variable a la interfaz e indicar que su uso es opcional
//con el signo ? --> ver linea 42
const personajeConInterfaz: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personajeConInterfaz.puebloNatal = 'Pueblo Resistencia';

console.table( personajeConInterfaz );