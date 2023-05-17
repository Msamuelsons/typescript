interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string, // !opcional uso do '?' 
};

const pessoa: Pessoa = {
    nome: 'Anakin Skywalker',
    idade: 22,
};

const outraPessoa: Pessoa = {
    nome: 'Obi Wan Kenobi',
    idade: 38,
    profissao: 'Jedi'
}



// Array de objetos
// pode ser tbm Pessoa[]

const arrayPesso: Array<Pessoa> = [
    pessoa,
    outraPessoa,
];

console.log(arrayPesso);

const arrayNumero: Array<number> = [1,2,3,4];
const arrayString: string[] = ['a', 'b', 'c'];

console.log(arrayNumero);
console.log(arrayString);