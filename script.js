// Para leer HTML desde JavaScript podemos usar varios métodos, entre ellos "document.getElement"
// Estoy creando variables que reprentan/guardan a los "Selectores" de mi HTML para trabajar con ellos
const h1 = document.querySelector('h1');                        // Selecciono por el nombre de la etiquite ej. "h1"
const input1 = document.querySelector('#calculo1');
const formulario = document.querySelector('#formulario');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const parrafoResultado = document.querySelector('#resultado')

// Para agregar un evento a un elemenot de HTML usamos el método "addEventListener"
formulario.addEventListener("submit", sumarInputsValues);      // Este método recibe dos párametros, el primero es el nombre del evento que espera y el segundo es la función a ejecutar

function sumarInputsValues(event){
    event.preventDefault();                                     // Para evitar que se recarge la página tenemos que agregar un párametro a nuestra función y utilizar el método "preventDefault()"
    console.log(event);                                         // Me imprime el tipo de evento y su información
    console.log('Escuchando el evento de click');
    console.log(input1.value +  input2.value);                   // Para concatenar uso el método "método.value"
    const sumaDeInputs = input1.value + input2.value;
    parrafoResultado.innerText = "Resultado: " + sumaDeInputs;      // Para insertar contenido dentro del párrafo utilizo el atributo ".innerText"
}


// Ejemplo de un evento que detecta cuando se copia un texto
parrafoResultado.addEventListener('copy', showMessageWhenCopy);
function showMessageWhenCopy(){
    alert('Texto copiado')
}

// El evento "wheel" se activa cuando el usuario utiliza la rueda del mouse
h1.addEventListener('wheel', changeSize)
function changeSize() {
    this.style.fontSize = "350px";
  }