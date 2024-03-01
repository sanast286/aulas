// Função Declarativa
function saudar() {
    console.log('Olá, mundo!');
}

// Função Expressão
const cumprimentar = function() {
    console.log('Oi, como vai?');
};

// Arrow Function
const despedir = () => {
    console.log('Até mais!');
};

// Função Construtora
const Pessoa = function(nome) {
    this.nome = nome;
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`);
    };
};

// IIFE - Função Autoinvocável
(function() {
    console.log('Executando a IIFE');
})();

// Função Assíncrona
async function buscarDados() {
    console.log('Buscando dados...');
    // Simula busca de dados
    return 'Dados recebidos';
}

// Chamadas de função
saudar();
cumprimentar();
despedir();
const pessoa = new Pessoa('Alice');
pessoa.falar();
buscarDados().then(console.log);
