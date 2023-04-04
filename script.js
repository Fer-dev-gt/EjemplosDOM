// Para leer HTML desde JavaScript podemos usar varios métodos, entre ellos "document.getElement"
// Estoy creando variables que reprentan/guardan a los "Selectores" de mi HTML para trabajar con ellos
const h1 = document.querySelector('h1');                        // Selecciono por el nombre de la etiquite ej. "h1"
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const parrafoResultado = document.querySelector('#resultado')

function btnOnClick(){
    console.log('Escuchando el evento de click');
    console.log(input1.value + input2.value);                   // Para concatenar uso el método "método.value"
    const sumaDeInputs = input1.value + input2.value;
    parrafoResultado.innerText = "Resultado: " + sumaDeInputs;      // Para insertar contenido dentro del párrafo utilizo el atributo ".innerText"
    
}