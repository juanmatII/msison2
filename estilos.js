//manejo del DOM
const cajaEstilos = document.getElementById("cajaEstilos");
const botonAgregar = document.getElementById("botonAgregar");
const botonEliminar = document.getElementById("botonEliminar");
const botonCambiar = document.getElementById("botonCambiar");
const ocultarContenido1 = document.getElementById("ocultarContenido1");
const caja2 = document.getElementById("caja2")

//ignorar esto


//Funciones de los botones
const agregar = () => {
    cajaEstilos.classList.add("highlight");
    caja2.classList.add("highlight");
}
const cambiar = () => {
    const colorTexto = document.getElementById("colorTexto");
    const colorFondo = document.getElementById("colorFondo");
    let valorColorTexto = colorTexto.value;
    let valorColorFondo = colorFondo.value;
    //
    cajaEstilos.style.color = valorColorTexto;
    cajaEstilos.style.backgroundColor = valorColorFondo;
    //
    caja2.style.backgroundColor = valorColorFondo;
    caja2.style.color = valorColorTexto;
    console.log(valorColorTexto);
    console.log(valorColorFondo);
}
const ocultar1 = () => {
    if(cajaEstilos.style.display === "block" && caja2.style.display === "none"){
        cajaEstilos.style.display = "none";
        caja2.style.display = "block";
    }else {
        cajaEstilos.style.display = "block";
        caja2.style.display = "none";
    }
}

const eliminar = () => {
    cajaEstilos.classList.remove("highlight");
    cajaEstilos.style.color = null;
    cajaEstilos.style.backgroundColor = null;
}



