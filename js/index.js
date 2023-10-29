import { ahorcadoInicio } from "./ahorcado.js"
import {ruletaInicio} from "./ruleta.js"
 
const botonAhorcado = document.getElementById("btn-play") 
const botonRuleta = document.getElementById("boton-tirar") 
botonAhorcado.addEventListener("click", () => {
    ahorcadoInicio()
});
botonRuleta.addEventListener("click", () => {
    ruletaInicio()
});