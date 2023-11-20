import state from './state.js'
import * as timer from './timer.js'
import * as imagens from './imagens.js'
import * as sounds from  './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle("running")

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset(){
    state.isRunning = false 
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
   
    sounds.buttonPressAudio.play()
}
 
// mudanca de codigo
document.addEventListener("DOMContentLoaded", function() {
    const secondsElement = document.getElementById("seconds");
    const minutesElement = document.getElementById("minutes");
    const plusButton = document.querySelector("button[data-action='plus']");
    const minusButton = document.querySelector("button[data-action='minus']");


 // Recuperar os valores do armazenamento local se existirem
 let storedSeconds = localStorage.getItem("savedSeconds") || "00";
 let storedMinutes = localStorage.getItem("savedMinutes") || "00";

 secondsElement.textContent = storedSeconds;
 minutesElement.textContent = storedMinutes;


    plusButton.addEventListener("click", function() {
        let currentSeconds = parseInt(secondsElement.textContent, 10);
        let currentMinutes = parseInt(minutesElement.textContent, 10);

        //adicionado som para os cliques
        sounds.buttonPressAudio.play()
        currentSeconds += 5;
      

        // conversao de segundos para minuntos do botao +
        if (currentSeconds >= 60) {
            currentSeconds -= 60;
            currentMinutes += 1;
        }

        secondsElement.textContent = currentSeconds.toString().padStart(2, "0");
        minutesElement.textContent = currentMinutes.toString().padStart(2, "0");
          // Salvar os valores no armazenamento local
          localStorage.setItem("savedSeconds", secondsElement.textContent);
          localStorage.setItem("savedMinutes", minutesElement.textContent);
    });

    minusButton.addEventListener("click", function() {
        let currentSeconds = parseInt(secondsElement.textContent, 10);
        let currentMinutes = parseInt(minutesElement.textContent, 10);

        //adicionado som para os cliques
        sounds.buttonPressAudio.play()
        currentSeconds -= 5;

        
         // conversao de segundos para minuntos do botao -
         //nao deixa numero negativo 
         if (currentSeconds < 0) {
            currentSeconds += 60;
    
            if (currentMinutes > 0) {
                currentMinutes -= 1;
            }
        }

        secondsElement.textContent = currentSeconds.toString().padStart(2, "0");
        minutesElement.textContent = currentMinutes.toString().padStart(2, "0");

          // Salvar os valores no armazenamento local
          localStorage.setItem("savedSeconds", secondsElement.textContent);
          localStorage.setItem("savedMinutes", minutesElement.textContent);
    });
});

//Musica de acordo com os modo selecionado

document.addEventListener("DOMContentLoaded", function() {
    const Buttonpaisagem = document.querySelector("button[data-action='paisagem']");
    const Buttonchuva = document.querySelector("button[data-action='chuva']");
    const Buttoncafeteira = document.querySelector("button[data-action='cafeteira']");
    const Buttonlareira = document.querySelector("button[data-action='lareira']");


 
    function stopAllSounds() {
       
        sounds.paisagem.pause();
        sounds.paisagem.currentTime = 0;
        sounds.chuva.pause();
        sounds.chuva.currentTime = 0;
        sounds.cafeteria.pause();
        sounds.cafeteria.currentTime = 0;
        sounds.lareira.pause();
        sounds.lareira.currentTime = 0;
    }
      // Mude a imagem de fundo do corpo da página
    function changeBackground(imageUrl) {
        document.body.style.backgroundImage = imageUrl;
    }

      
            Buttonpaisagem.addEventListener("click", function() {
                changeBackground(imagens.imgPaisagem.backgroundImage)
                stopAllSounds();
                sounds.paisagem.play()
                
            })
            Buttonchuva.addEventListener("click", function() {
                changeBackground(imagens.imgChuva.backgroundImage)
                stopAllSounds();
                sounds.chuva.play()
            })

            Buttoncafeteira.addEventListener("click", function() {
                changeBackground(imagens.imgCafeteria.backgroundImage)
                stopAllSounds();
                sounds.cafeteria.play()
            })

            Buttonlareira.addEventListener("click", function() {
                changeBackground(imagens.imgLareira.backgroundImage)
                stopAllSounds();
                sounds.lareira.play()
            })

})


 // modo lareira  ativado 
 document.addEventListener("DOMContentLoaded", function () {
    // Seletor do botão lareira
    var lareiraButton = document.getElementById("lareiraButton");

    // Adiciona um ouvinte de clique ao botão lareira
    lareiraButton.addEventListener("click", function () {
        // Exibe a mensagem por um breve tempo
        showMessage("MODO LAREIRA ATIVADO", 2000); // 2000 milissegundos (2 segundos)
    });

    // Função para exibir uma mensagem temporária
    function showMessage(message, duration) {
        // Cria um elemento de mensagem
        var messageElement = document.createElement("div");
        messageElement.textContent = message;
        messageElement.style.position = "fixed";
        messageElement.style.top = "4%"
        messageElement.style.left = "50%";
        messageElement.style.transform = "translate(-50%, -50%)";
        messageElement.style.padding = "15px";
        messageElement.style.backgroundColor = 'red';
        messageElement.style.color = "#fff";
        messageElement.style.borderRadius = "5px";
        messageElement.style.zIndex = "9999";
        messageElement.style.fontSize = "1.5rem";

        // Adiciona a mensagem ao corpo do documento
        document.body.appendChild(messageElement);

        // Agende a remoção da mensagem após o intervalo especificado
        setTimeout(function () {
            document.body.removeChild(messageElement);
        }, duration);
    }
});


// modo chuva  ativado 
document.addEventListener("DOMContentLoaded", function () {
    var lareiraButton = document.getElementById("chuvaButton");

    
    lareiraButton.addEventListener("click", function () {
        
        showMessage("MODO CHUVA ATIVADO", 2000); 
    });

    function showMessage(message, duration) {
        var messageElement = document.createElement("div");
        messageElement.textContent = message;
        messageElement.style.position = "fixed";
        messageElement.style.top = "4%"
        messageElement.style.left = "50%";
        messageElement.style.transform = "translate(-50%, -50%)";
        messageElement.style.padding = "15px";
        messageElement.style.backgroundColor = 'blue';
        messageElement.style.color = "#fff";
        messageElement.style.borderRadius = "5px";
        messageElement.style.zIndex = "9999";
        messageElement.style.fontSize = "1.5rem";

       
        document.body.appendChild(messageElement);

        setTimeout(function () {
            document.body.removeChild(messageElement);
        }, duration);
    }
});


// modo paisagem ativado 
document.addEventListener("DOMContentLoaded", function () {
    var lareiraButton = document.getElementById("paisagemButton");

    
    lareiraButton.addEventListener("click", function () {
        
        showMessage("MODO PAISAGEM ATIVADO", 2000); 
    });

    function showMessage(message, duration) {
        var messageElement = document.createElement("div");
        messageElement.textContent = message;
        messageElement.style.position = "fixed";
        messageElement.style.top = "4%"
        messageElement.style.left = "50%";
        messageElement.style.transform = "translate(-50%, -50%)";
        messageElement.style.padding = "15px";
        messageElement.style.backgroundColor = 'green';
        messageElement.style.color = "#fff";
        messageElement.style.borderRadius = "5px";
        messageElement.style.zIndex = "9999";
        messageElement.style.fontSize = "1.5rem";

       
        document.body.appendChild(messageElement);

        setTimeout(function () {
            document.body.removeChild(messageElement);
        }, duration);
    }
});
// modo cafeteria ativado 
document.addEventListener("DOMContentLoaded", function () {
    var lareiraButton = document.getElementById("cafeteiraButton");

   
    lareiraButton.addEventListener("click", function () {
        
        showMessage("MODO CAFETERIA ATIVADO", 2000);
    });

    function showMessage(message, duration) {
        var messageElement = document.createElement("div");
        messageElement.textContent = message;
        messageElement.style.position = "fixed";
        messageElement.style.top = "4%"
        messageElement.style.left = "50%";
        messageElement.style.transform = "translate(-50%, -50%)";
        messageElement.style.padding = "15px";
        messageElement.style.backgroundColor = '#a18262';
        messageElement.style.color = "#fff";
        messageElement.style.borderRadius = "5px";
        messageElement.style.zIndex = "9999";
        messageElement.style.fontSize = "1.5rem";

        document.body.appendChild(messageElement);

        setTimeout(function () {
            document.body.removeChild(messageElement);
        }, duration);
    }
});


// mudando a cor do timer e controls de acordo com modo selecionado 


document.addEventListener("DOMContentLoaded", function () {
    var controlsRightButtons = [
        document.getElementById("controlsright"),
        document.getElementById("controlsright2"),
        document.getElementById("controlsright3"),
        document.getElementById("controlsright4")
    ];


    function handleButtonClick(clickedButton, bgColor) {
        document.body.classList.remove("controls-right-clicked");

        controlsRightButtons.forEach(function (button) {
            button.classList.toggle("controls-right-clicked", button === clickedButton);

            if (button.classList.contains("controls-right-clicked")) {
                document.documentElement.style.setProperty('--controls-bg-color', bgColor);
                document.documentElement.style.setProperty('--timer-bg-color', bgColor);
                button.style.setProperty('background-color',bgColor);
            } else {
                button.style.setProperty('background-color', '#292929');
            }
        });
    }

    controlsRightButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            var bgColor;
            switch (index) {
                case 0:
                    bgColor = 'green';
                    break;
                case 1:
                    bgColor = 'blue';
                    break;
                case 2:
                    bgColor = '#a18262';
                    break;
                case 3:
                    bgColor = 'red';
                    break;
                default:
                    bgColor = '#292929';
            }

            handleButtonClick(button, bgColor);
        });
    });
});
