// Loop For
for (let i = 0; i < 5; i++) {
    console.log('For Loop:', i);
}

// Loop While
let j = 0;
while (j < 5) {
    console.log('While Loop:', j);
    j++;
}

// Loop Do-While
let k = 0;
do {
    console.log('Do-While Loop:', k);
    k++;
} while (k < 5);

// Loop For-In (para propriedades de objetos)
const pessoa = { nome: 'Ana', idade: 25 };
for (let propriedade in pessoa) {
    console.log(`For-In Loop: ${propriedade} = ${pessoa[propriedade]}`);
}

// Loop For-Of (para valores de iteráveis, como arrays)
const numeros = [10, 20, 30, 40, 50];
for (let numero of numeros) {
    console.log('For-Of Loop:', numero);
}
