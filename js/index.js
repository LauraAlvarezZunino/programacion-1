import { ahorcadoInicio } from "./ahorcado.js"
import {ruletaInicio} from "./ruleta.js"
import {iniciarPreguntados} from "./preguntados.js"
 
const botonAhorcado = document.getElementById("btn-play") 

const botonJugarRuleta = document.getElementById("start-ruleta-btn") 
const botonJugarPreguntados =document.getElementById("start-preguntados-btn")
botonAhorcado.addEventListener("click", () => {
    ahorcadoInicio()
});
botonJugarRuleta.addEventListener("click", () => {
    ruletaInicio()
});

botonJugarPreguntados.addEventListener("click", () =>{
    iniciarPreguntados()
})