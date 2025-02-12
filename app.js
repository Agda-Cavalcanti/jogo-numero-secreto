let listaDeNumerosSorteados = [];
let tamanhoMaximodeSorteio = 10;

let numeroSecreto = gerarNumeroAleatorio(); // Função atribuída a variável do número secreto 


let tentativas = 1;

//Função para mudar conteúdos das tags do HTML 
function exibirTextoNaTela(tag,texto){ // Função com parâmetros e sem retorno (apenas exibe na tela)
    let campo =  document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 10:')
}

exibirMensagemInicial();
//Verificar se o chute é igual ao número secreto 
function verificarChute(){ // Função sem parâmetros e sem retorno, é chamada ao clicar no botão CHUTE
    
    let chute =  document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilitando botão de NOVO JOGO

       
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}` );
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        } 

        tentativas++;
        limparCampo();
    }

   
}

function gerarNumeroAleatorio(){// Gerando número aleatório para número secreto e impedindo que seja repetido este número
    let numeroEscolhido = parseInt(Math.random() * tamanhoMaximodeSorteio + 1);


    if(listaDeNumerosSorteados.length == tamanhoMaximodeSorteio){// Para esvaziar a lista
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){ // Para não sorter o mesmo número mais de uma vez 
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() { //Limpando campo onde o usuário sugere o chute
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo() {// Função sem parâmetros e sem retorno, é chamada ao clicar no botão NOVO JOGO   
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}