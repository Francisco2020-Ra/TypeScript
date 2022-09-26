
/*
    ===== Código de TypeScript =====
*/

/* Funciones */

//1. TypeScript nos ofrece la posibilidad de tipado fuerte, asignando a la cada variable el tipo de dato

function sumar(a:number, b:number): number{
    return a + b;
}
// decimos que.. la funcion suma recibe dos parametros de tipo number y retorna un valor tipo number

const resultado = sumar(1,2);

console.log( resultado );

// definiendo la misma funcion pero en funcion flecha

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}


console.log( sumarFlecha );

//buena practica: expresa siempre el tipo de dato
//Orden de los parametros
//1.Los obligatorios / 2.Los opcionales / 3.Los que se inicializan 
function multiplicar (numero:number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}

//En el paso de argumentos se respeta el orden de los parametros
//Ej si paso el cinco solo, la base se toma del parametro inicializado que seria 2
const resultadoMultiplicar  = multiplicar(5);

console.log( resultadoMultiplicar );

//Si deseo modificar la base obligatoriamente debo pasar el argumento opcional
const resultadoMultiplicarConOpcionalObligatorio = multiplicar(5, 0, 10);

console.log( resultadoMultiplicarConOpcionalObligatorio );


/* funciones con objetos */

// los objetos se crean como interfaces, pero son interfaces tontas porque no saben si tiene getters y setters ni nada de una funcion
interface PersonajeLOR{
    nombre: string,
    pv: number;
    //declaro la funcion luego de que se queje
    mostrarHP: () => void;

}

// esta funcion recibe un objeto de tipo PersonajeLOT
function curar(personaje: PersonajeLOR, curarX: number): void{

    personaje.pv += curarX;

    console.log( personaje );
}

//creando un nuevo personaje
const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,  
    //si deseo mostrar una funcion
    //se quejaria porque no esta definido en la interfaz PersonajeLOR
    mostrarHP(){
        console.log('Puntos de vida: ' + this.pv);
    }
}

curar( nuevoPersonaje, 20 );

//Para llamar a la funcion que esta dentro de la constante
nuevoPersonaje.mostrarHP();
