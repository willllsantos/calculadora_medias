const form = document.getElementById('form-atividade');
let linhas = ''
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado"/>'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado Reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota minima:"))

form.addEventListener('submit', function(e) {  //essa funçao é para tirar o reload da pagina quando for submeita ao envio//
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    atualizaMedia()
}) ;

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade'); //esses "const" serve para a criaçao de variaveis, mudança do nome delad e a chamada do "id " que esta no HTML
    const inputNotaAtividade = document.getElementById('nota-atividade');
    //alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);  // (add crase) esta mandando a mensagem e chamando o valor dos inputs

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida!`)
    }else{ 
    atividades.push(inputNomeAtividade.value) // esse value no final é para puxar o valor que foi colocado no input
    notas.push(parseFloat(inputNotaAtividade.value)) // parsefloat para numeros quebrados, e parseint para numeros inteiros, serve para nao haver uma concatenaçao dos valores e sim uma soma deles

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
    linha += '</tr>'

    linhas += linha
}

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMedia() {
    const mediaFinal = calculaMedia()

    document.getElementById("media-final-valor").innerHTML =  mediaFinal.toFixed(2) // limita as casas decimais 
    document.getElementById("media-final-resultado").innerHTML =  mediaFinal >= notaMinima ? spanAprovado :spanReprovado 
}

function calculaMedia(){
    let somaDasNotas = 0   

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return  somaDasNotas / notas.length
    
    
}