const inputFoto = document.getElementById ('inputFoto');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const galeria = document.getElementById('galeria')

botaoAdicionar.addEventListener('click', () => {
    const linkFoto = inputFoto.value

    if(linkFoto !== '') {
        const novaImagem = document.createElement('img');

        novaImagem.src = linkFoto

        galeria.appendChild(novaImagem);

        inputFoto.value = '';
    }
})