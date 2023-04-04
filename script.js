// Para leer HTML desde JavaScript podemos usar varios métodos, entre ellos "document.getElement"
// Estoy creando variables que reprentan/guardan a los "Selectores" de mi HTML para trabajar con ellos
const h1 = document.querySelector('h1');                        // Selecciono por el nombre de la etiquite ej. "h1"
const p = document.querySelector('p');
//const p = document.querySelectorAll('p');                     // Usando "querySelectorAll" guardo todos los elementos que coincidan en una lista
const parrafoClase = document.querySelector('.parrafoClase');   // Selecciono por "class" usando "."
//const parrafoClase = document.getElementByClassName('parrafoClase'); // Cuando usamos "getElementByClassName" no es necesario usar "."
const parrafoID = document.querySelector('#parrafoID');         // Selecciono por "Id" usando "#"
//const parrafoID = document.getElementById('parrafoID');      // Cuando usamos "getElementoById no es necesario usar '#'
const input = document.querySelector('input');

console.log(h1);            // Acá me imprime el forma de la etiqueta tal cual esta en mi HTML
console.log(input.value)    // Me mostrará en valor actual que tiene el input (Al inicio esta vacío, aunque podemos darle un valor por defecto)


// Puedo usar este truco para mandar múltiples valores/argumentos a un console.log(), lo imprime como si fuera un objeto (Formato de llave "{}")
console.log({
    h1,
    p,
    parrafoClase,
    parrafoID,
    input,
})

// Manera de cambiar el contenido HTML desde JavaScript usando DOM y "innerHTML"
h1.innerHTML = "Patito <br> Feo";        // Cambie el contenido que guardé en esta variable, (Tambien puedo escribir otras etiquetas aquí)
//h1.innerText = "Patito <br> Feo";        // Con "innerText" me protejo que no se ejecute código y que sea solo texto

// Forma de objeter el valor de un atributo de un elemento
console.log(h1.getAttribute('pantalla'));       // Imprimi el valor del atributo
// Devuelve "null" si no esta definido ese atributo
console.log("Atributos no definidos dan: " + h1.getAttribute('class'));

// Ahora para modificar el valor de un atributo usamos "setAttribute" 
// Usamos 2 argumentos, el primero es el nombre del atributo a modificar y el segundo será el nuevo valor
h1.setAttribute("pantalla", "Este valor ha sido modificado con setAttribute");
console.log(h1.getAttribute('pantalla')); // Ahora el valor esta actualizado

// De esta forma podemos agregarle una "class" a una etiqueta
h1.classList.add('claseAgregada');
// Tambien podemos agregarle una "class" extra a una etiqueta que ya tiene una "class"
h1.classList.add('otraClass');

// Podemos eliminar una clase con este método
h1.classList.remove('otraClass');

// Esta propiedad/método sirve mucho para cuando ya tenemos eventos de JavaScript
//h1.classList.toggle('otraClass');

// Esta propiedad/método nos devuelve True o False dependiendo si existe la "class" en la etiqueta
//h1.classList.contains('otraClass');

// Podemos modificar el value de nuestro "input" con este método
input.value = "Valor modificado con .value"

// Ya sabemos como modificar un elemento existente, ahora veremos como crear uno desde cero usando...
const img = document.createElement('img');      // Creamos un elemento nuevo, es este caso una etiqueta de imagen <img> y la guardamos en una variable
// Le colocamos la información de la foto usando el método "setAttibute()"
img.setAttribute('src', 'https://cra.org/crn/wp-content/uploads/sites/7/2017/03/MSFT_logo_png_678x452.png');
console.log(img);                               // Imprimo la etiqueta de mi foto son su información
parrafoID.innerHTML = "";                       // Con esto borro el contenido en medio de mi etiqueta
// Ahora puedo insertar mi etiqueta <img> en un párrafo usando el método "append()"
parrafoID.append(img);
//parrafoID.replaceWith(img);                   // Tambien podemos usar este método para colocar con la imagen, (Convierte la etiqueta <p> a <img>, el input queda despues a la par)
console.log(document.createElement('img'));     // Nos imprime la etiqueta <img> (Es etiqueta autocerrante)
console.log(document.createElement('span'));    // Va a imprimir las etiquetas <span></span>