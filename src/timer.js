import state from "./state.js"
import * as elements from './elements.js'
import { reset } from "./actions.js"
import { kichenTimer } from "./sounds.js"

export function countdown() {
    
    //limpar deixar padrao
    clearTimeout(state.countdownID)
    
    
    if(!state.isRunning){
        return
    }

    //convertendo string para number 
    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)

    
    seconds --


    if(seconds < 0){
        seconds = 59
        minutes -- 
    }
    
    if(minutes < 0 ){
        reset()
        kichenTimer.play()
        return 
    }
  
    updateDisplay(minutes, seconds)
    
    
    
 //e uma funcao que executa depois de um tempo acionando 
    
    state.countdownID = setTimeout(() => countdown(), 1000)


}

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds =  seconds ?? state.seconds

    //padStart serve para adicionar numeros anterior no numero adicionando 
    elements.minutes.textContent = String(minutes).padStart(2, "0")
    elements.seconds.textContent = String(seconds).padStart(2, "0")

}
