const numeros: Array<number> = [1,8, 10, 5, 4, 3, 20, 35];
const novoArray: number[] = [1,2,4,5,6,7,8,9];


// o (find) pega somente o primeiro valor da condição
const igualQuatro = numeros.find(numeros => numeros > 100); // undefined

novoArray.forEach(num => console.log(num));

const maiorDois = novoArray.filter(num => num > 2);
console.log(maiorDois);

const dividirDois = novoArray.map(num => num / 2);
console.log(dividirDois);