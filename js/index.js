import { ahorcadoInicio } from "./ahorcado.js"
 
const botonAhorcado = document.getElementById("btn-play") 

botonAhorcado.addEventListener("click", () => {
    ahorcadoInicio()
});