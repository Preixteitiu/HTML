//criando o registro container no codigo html ↓↓
const divContainerGeral = document.createElement('div');
divContainerGeral.id = 'container-geral';
//identificando o nome do container para estilizar no CSS ↑↑

//criando o registro de um cabecalho no HTML ↓↓
const divCabecalho = document.createElement('div');
divCabecalho.id = 'cabecalho';
//identificando o nome da div para estilizar no CSS ↑↑

//document.createElement('nome da tag') = nome da tag que será reconhecida através do HTML
//document.id = 'nome' = nome do class que será reconhecifo para estilizar no CSS

//criando uma tag img
const imgLogo = document.createElement('img');
imgLogo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Logo_ORKUT.svg/3840px-Logo_ORKUT.svg.png";
//imgLogo.src é uma particularidade da tag img, onde usamos o SRC para linkar imagens do google ou locais para o documento HTML

//a const h1BoasVindas.innerHTML é basicamente o que seria escrito dentro de uma tag <h1>Bem-vindo ao Orkut</h1>
const h1BoasVindas = document.createElement('h1');
h1BoasVindas.id = 'titulo';
h1BoasVindas.innerHTML = 'Bem-vindo ao Orkut';

//mesma ideia da div porém a tag é uma section
const sectionConteudo = document.createElement('section')
sectionConteudo.id = 'container-conteudo'

//container esquerdo
const divContainerEsquerdo = document.createElement('div')
divContainerEsquerdo.id = 'container-esquerdo'

//item 1 do container esquerdo
const containerEsquerdoItem1 = document.createElement('div')
containerEsquerdoItem1.id = 'container-esquerdo1'

//criando imagem do item 1
const imagemEsquerdaItem1 = document.createElement('img')

//o comando .appendChild funciona de forma inversa, é feito de baixo pra cima


//colocando o sectionConteudo dentro do container-geral
divContainerGeral.appendChild(sectionConteudo)

//pendurando esta div na tag <body> no HTML
document.body.appendChild(divContainerGeral)