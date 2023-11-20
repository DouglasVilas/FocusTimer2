import { controls } from "./elements.js"
import * as actions from "./actions.js"
import * as elements from "./elements.js"
import { updateDisplay } from "./timer.js"
import  state from "./state.js"

export function registerControls() {
//vai listar todos os cliques que se fez na tela
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
         
            return
        }
            actions[action]()

    })
}
export function setMinutes (){
    elements.minutes.addEventListener('focus', () => {
        elements.minutes.textContent = ""

    })
 }

 export function setSeconds (){
    elements.seconds.addEventListener('focus', () => {
        elements.seconds.textContent = ""

    })
}


    

    //limitar os numeros a 60 
    elements.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time  = time > 60 ? 60 : time
        
        state.minutes = time
       

    elements.seconds.addEventListener('blur', (event) => {
        let times = event.currentTarget.textContent
        times  = times > 59 ? 59 : times
        
        state.seconds = times
    
        
    

        updateDisplay()
        elements.minutes.removeAttribute('contenteditable')
        elements.seconds.removeAttribute('contenteditable')
    }) })
   
      
   
 

