const pocoyo = [
    {
        nome:'pocoyo',
        imagem:'img/pocoyo.jpeg',
        descricao:'Pocoyo',
    },
    {
        nome:'elefante',
        imagem:'img/elefante.jpeg',
        descricao:'elefantão',
    },
    {
        nome:'pato',
        imagem:'img/pato.jpeg',
        descricao:'Pato pato',
    },
    {
        nome:'grupo',
        imagem:'img/grupo.jpeg',
        descricao:'grupinho',
    },
    {
        nome:'grupão',
        imagem:'img/grupao.jpeg',
        descricao:'Grupão',
},   
];

//seleciona o conteiner da lista de Pocoyo
const listapoco = document.getElementById('lista-pocoyo')

//seleciona os elementos detalhes
const nomepoco = document.getElementById('nome-pocoyo')
const imgpoco = document.getElementById('imagem-pocoyo')
const descricaopoco = document.getElementById('descricao-pocoyo')

function exibirPoco(){
    pocoyo.forEach((pocoyo, index)=>{
        const pocoyoDiv = document.createElement('div')

        //colocar '' entre o H3
        pocoyoDiv.innerHTML = `<h3>${pocoyo.nome}</h3>`;
        pocoyoDiv.addEventListener('click', () => mostrarDetalhes(index));
        listapoco.appendChild(pocoyoDiv);
    });

    //função para exibir os detalhes da criatura selecionada
    function mostrarDetalhes(index) {
        const pocos = pocoyo[index];
        nomepoco.textContent = pocos.nome;
        imgpoco.src = pocos.imagem;
        descricaopoco.textContent = pocos.descricao;
    }
}

//executa a função para exibir as criaturas ao carregar a página
exibirPoco();

