//'DOM content loaded' Espera toda pagina ser carregada
document.addEventListener('DOMContentLoaded', () =>{

    //coloando o HTML em variáveis do JS para serem manipuladas
    const botaoGerar = document.getElementById('botaoGerar')
    const botaoVoltar = document.getElementById('botaoVoltar')

    const secaoFormulario = document.getElementById('secao-formulario')
    const secaoCurriculo = document.getElementById('secao-curriculo')

    botaoGerar.addEventListener('click', () => {
        const nome = document.getElementById('entradaNome').value
        const contato = document.getElementById('entradaContato').value
        const resumo = document.getElementById('entradaResumo').value
        const experiencia = document.getElementById('entradaExpericencia').value
        const formacao = document.getElementById('entradaFormacao').value

        if(!nome || !contato || !resumo || experiencia || formacao){
            alert('Preencha todos os campos')
            return
        }
    })
})