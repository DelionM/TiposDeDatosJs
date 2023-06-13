/* Tipos de datos 
    string - cadena de texto
    number - número
    boolean - Booleano (verdadero o falso)
    object - objeto
    function - funciones 
    null - valor nulo
    undefined - valor sin definir
*/

// cadena de texto
const nombre = 'Giovanni';
console.log(nombre);
// número
const numero1 = 4;
const numero2 = -4.48;

//Boleano

const ususarioConectado = 'true';
const mayorQue = 1 > 2;
console.log(mayorQue);

//arrays - arreglo

const arreglo = [1, 2, 5, 'texto', {propirdad:'valor'}, [1,2,3]];
console.log(arreglo);

//objeto

const persona = {
    nombre2: 'Giovanni',
    edad: 21,
    carro:{
        marca: 'Ford',
        color: 'negro',
    },
};

console.log(persona);
console.log(persona.nombre2);
console.log(persona.carro.marca);

//function

function hola(){
    console.log('hola');
}
// de esta manera se manda a llamar la funcion 
hola();

//undefined se usa para indicarnos que un valor no esta definido
const miVariable2 = undefined;

//null para especificar que un valor sea nulo
const miVariable1 = null;