//criando o container geral
const divContainerGeral = document.createElement('div');
divContainerGeral.id = 'container-geral';

// criando o container cabecalho
const divCabecalho = document.createElement('div');
divCabecalho.id = 'container-cabecalho';

// criando a logo do container cabecalho
const imgLogo = document.createElement('img');
imgLogo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Logo_ORKUT.svg/3840px-Logo_ORKUT.svg.png";

//criando titulo h1 do container cabecalho
const h1BoasVindas = document.createElement('h1');
h1BoasVindas.id = 'titulo';
h1BoasVindas.innerHTML = "Bem-vindo ao Orkut!";


//criando containers conteudo
const sectionConteudo = document.createElement('section');
sectionConteudo.id = 'container-conteudo';

//criando container esquerdo de conteudo
const divConteudoEsquerdo = document.createElement('div');
divConteudoEsquerdo.id = 'container-conteudo-esquerdo';

//criar container item 1
const containerItem1 = document.createElement('div');
containerItem1.id = 'container-esquerdo-item-1';

//cria imagem item 1
const esquerdoImagemItem1 = document.createElement('img');
esquerdoImagemItem1.src = "https://img.magnific.com/fotos-gratis/homem-morfo-3d-olhando-atraves-de-binoculos_1048-14177.jpg?semt=ais_hybrid&w=740&q=80";
esquerdoImagemItem1.id = 'esquerdo-imagem-item-1';


//criar div texto item 1
const esquerdoContaiterTextosItem1 = document.createElement('div');
esquerdoContaiterTextosItem1.id = "container-textos-item-1";

//criar h3 item 1
const esquerdoH3Item1 = document.createElement('h3');
esquerdoH3Item1.innerHTML = "Igual a vida real";

//criar tag p item 1
const esquerdoParagrafoItem1 = document.createElement('p');
esquerdoParagrafoItem1.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James";


//criando container direito de conteudo
const divConteudoDireito = document.createElement('div');
divConteudoDireito.id = 'container-conteudo-direito'

const divLogin = document.createElement('div');
divLogin.id = 'container-login';


const h3CabecalhoLogin = document.createElement('h3');
h3CabecalhoLogin.innerHTML = "Acesse com a sua conta do Google";


//criando formulario
const form = document.createElement('form'); 


const divEmail = document.createElement('div');

const labelEmail = document.createElement('label');
labelEmail.innerHTML = "E-mail: ";
const inputEmail = document.createElement('input');

divEmail.appendChild(labelEmail);
divEmail.appendChild(inputEmail);


const divSenha = document.createElement('div');

const labelSenha = document.createElement('label');
labelSenha.innerHTML = "Senha: ";
const inputSenha = document.createElement('input');
inputSenha.type = "password";

divSenha.appendChild(labelSenha);
divSenha.appendChild(inputSenha);

const containerInputsLogin = document.createElement('div');
containerInputsLogin.appendChild(divEmail);
containerInputsLogin.appendChild(divSenha);


const divContinuarConectado = document.createElement('div');

const checkbox = document.createElement('input');
checkbox.type = "checkbox";
const textoCheck = document.createElement('label');
textoCheck.innerHTML = "Continuar conectado.";

divContinuarConectado.appendChild(checkbox);
divContinuarConectado.appendChild(textoCheck);


const botao = document.createElement('input');
botao.innerHTML = "Login";
botao.type = "submit";

const linkRecuperarConta = document.createElement('a');
linkRecuperarConta.innerHTML = "Nao consegue acessar minha conta?";
linkRecuperarConta.href = '#';

form.appendChild(containerInputsLogin);
form.appendChild(divContinuarConectado);
form.appendChild(botao);
form.appendChild(linkRecuperarConta);




//pendurando logo no container cabecalho
divCabecalho.appendChild(imgLogo);
//pendurando titulo no container cabecalho
divCabecalho.appendChild(h1BoasVindas);

//pendurando cabecalho no container geral
divContainerGeral.appendChild(divCabecalho);


containerItem1.appendChild(esquerdoImagemItem1);
esquerdoContaiterTextosItem1.appendChild(esquerdoH3Item1);
esquerdoContaiterTextosItem1.appendChild(esquerdoParagrafoItem1);
containerItem1.appendChild(esquerdoContaiterTextosItem1);



//pendurando container item 1 no container conteudo esquerdo
divConteudoEsquerdo.appendChild(containerItem1);

//pendurando container do conteudo na section
sectionConteudo.appendChild(divConteudoEsquerdo);

divLogin.appendChild(h3CabecalhoLogin);
divLogin.appendChild(form);

divConteudoDireito.appendChild(divLogin);

//pendurando container do conteudo na section
sectionConteudo.appendChild(divConteudoDireito);

//pendurando section(container-conteudo)
divContainerGeral.appendChild(sectionConteudo);

//pendurando no body do html o container geral
document.body.appendChild(divContainerGeral);