// 1. Listar nomes com for...of
const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

for (const nome of nomes) {
    console.log(nome);
}

// 2. Somar valores com for...of
const numeros = [10, 20, 30, 40, 50];
let soma = 0;

for (const numero of numeros) {
    soma += numero;
}

console.log("Total:", soma);


// 3. Exibir propriedades de um objeto com for...in
const pessoa = {
    nome: "Maria",
    idade: 25,
    cidade: "São Paulo"
};

for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

// 4. Contar quantas propriedades tem um objeto
const produto = {
    nome: "Notebook",
    preco: 2500,
    marca: "Dell",
    estoque: true,
    quantidade: 10
};

let contador = 0;

for (const chave in produto) {
    contador++;
}

console.log("Total de propriedades:", contador);


// 5. Concatenar nomes em uma string com for...of
const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
let resultado = "";

for (const nome of nomes) {
    resultado += nome + ", ";
}

// Remove a última vírgula e espaço
resultado = resultado.slice(0, -2);

console.log(resultado);


// 6. Imprimir tipos de dados de elementos de um array
const misto = [1, "texto", true, 3.14, null, undefined];

for (const elemento of misto) {
    console.log(typeof elemento);
}

// 7. Transformar valores de um objeto
const pessoas = {
    Ana: 25,
    Bruno: 30,
    Carlos: 22
};

for (const chave in pessoas) {
    pessoas[chave] += 1;
}

console.log(pessoas);


// 8. Converter objeto em array de strings
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

const arrayStrings = [];

for (const chave in carro) {
    arrayStrings.push(`${chave}: ${carro[chave]}`);
}

console.log(arrayStrings);


// 9. Contar quantos valores únicos existem em um array
const valores = [1, 2, 3, 2, 4, 1, 5, 3, 6, 1];
const unicos = new Set();

for (const valor of valores) {
    unicos.add(valor);
}

console.log("Quantidade de valores únicos:", unicos.size);



// 10. Criar um objeto com a contagem de caracteres de uma frase
const frase = "hello world";
const contagem = {};

for (const caractere of frase) {
    if (contagem[caractere]) {
        contagem[caractere]++;
    } else {
        contagem[caractere] = 1;
    }
}

console.log(contagem);
