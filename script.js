//Esto es un comentario
//alert('¡Hola mundo!');

let nombre = "Juan";
let nota_mision1 = 100,
  nota_mision2 = 40,
  nota_mision3 = 70;
let notaTotal = 0;

const notaEstudiante = (nota1, nota2, nota3) =>
  alert((notaTotal = nota1 + nota2 + nota3) / 3);
const saludar = (nombre = "") => alert(`Hola, ${nombre} como estas`);

//================================================================================================================
//---------------------------------------- Manejo del DOM -------------------------------------------------------

// Obtencion de elementos del DOM
const titulo = document.getElementById("miTitulo");
const parrafo = document.getElementsByClassName("miParrafo");
const boton = document.getElementById("miBoton");
const caja = document.getElementById("miCaja");
const formulario = document.getElementById("miFormulario");
const botonDeCambio = document.getElementById("botonCambio");
const botonDeRegresarCambio = document.getElementById("botonDeRegresarCambio");
const botonCambiarColorFondo = document.getElementById("botonCambiarColorFondo");
const enlace = document.getElementById("enlace");
const cuerpo = document.getElementById("cuerpo");
const colorACambiar = document.getElementById("colorACambiar");
const crearNuevoDiv = document.getElementById("crearNuevoDiv");
const textoDelNuevoDiv = document.getElementById("textoDelNuevoDiv");

// Declaracion de variables
let tituloOriginal = titulo.textContent;
let textoDelDiv = textoDelNuevoDiv.value;

console.info(titulo);
console.warn(colorACambiar);
console.info(parrafo);
//Leer el input del usuario
document.addEventListener("keydown", (e) =>
  console.log(`Tecla presionada: ${e.key}`)
);

// Eventos bascicos
boton.addEventListener("click", () => alert("¡Botón clickeado!"));
titulo.addEventListener("click", () => alert("Esto es un titulo"));
caja.addEventListener("mouseover", () => (caja.style.backgroundColor = "blue"));
caja.addEventListener("mouseout", () => (caja.style.backgroundColor = null));
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Se envio el formulario");
});

// Funcionamiento de los botones de cambio del titulo
botonDeCambio.addEventListener(
  "click",
  () => titulo.textContent = "Cambio el Titulo"
);


botonCambiarColorFondo.addEventListener(
  "click",
  () => {
    let valorDeColorParaCambiarFondo = colorACambiar.value;
    document.body.style.backgroundColor = valorDeColorParaCambiarFondo;

  }
);
crearNuevoDiv.addEventListener(
  "click",
  () => {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('divCreado');
    nuevoDiv.textContent = textoDelNuevoDiv.value || "Nuevo div sin texto";
    document.body.appendChild(nuevoDiv);

  }
)

//Regresar cambios
botonDeRegresarCambio.addEventListener(
  "click",
  () => {
    const divsCreados = document.querySelectorAll(".divCreado");
    divsCreados.forEach((div) => div.remove());
    titulo.textContent = tituloOriginal;

    document.body.style.backgroundColor = null;
  }
);