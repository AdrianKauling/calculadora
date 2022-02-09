// O usuario ve uma tela com os seguintes botões:
//Numeros de 0 a 9:

//Quando clicados, seu valor entram na ultima posição da conta atual

// Quando digitamos o número no teclado, o valor do numero entra na ultima posição da conta atual

// Botao de apagar que remove o ultimo digito

// Quando clicado ele remove o ultimo digito da conta

// Os 4 operadores aritméticos (+ - * /)

// Quando clicado insere o operador na conta atual

// Um botao "C" que limpa o elemento que exibe a conta 

const botoesCaracterNaTela = document.querySelectorAll('.caracterNaTela')

let resultado = document.querySelector(".resultado")

let equacao

botoesCaracterNaTela.forEach(botao => {

    botao.addEventListener('click', event => {
        resultado.innerText += botao.innerText

        

        if(!equacao) {
            equacao = botao.dataset.value
        }else{
            equacao += botao.dataset.value
        }
    
    })
})

const botaoCalcular = document.querySelector(".calcular")

botaoCalcular.addEventListener('click', event => {

     resultado.innerText = eval(equacao)
})
