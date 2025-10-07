// ------------------------------
// 🔹 FUNÇÃO GENÉRICA
// ------------------------------

// A função 'returnValue' recebe um valor de tipo genérico 'T' e retorna esse mesmo valor.
// '<T>' indica que 'T' é um tipo genérico que será definido na hora da chamada da função.
const returnValue = <T>(value: T): T => value;

// Ao chamar a função, podemos especificar o tipo:
// Aqui, 'T' será 'string'
const message = returnValue<string>("Hello World");

// Aqui, 'T' será 'number'
const count = returnValue<number>(5);

// ------------------------------
// 🔹 FUNÇÃO GENÉRICA COM ARRAY
// ------------------------------

// Função que recebe um array de elementos genéricos 'Type' e retorna o primeiro elemento.
// Isso permite que a função funcione com qualquer tipo de array (strings, números, objetos, etc.)
function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0];
}

// Chamando a função para array de strings
const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);

// Chamando a função para array de números
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

// ------------------------------
// 🔹 PROMISE TIPADA
// ------------------------------

// Função assíncrona que retorna uma Promise de string.
// ': Promise<string>' indica o tipo do valor que será resolvido pela Promise
const returnPromise = async (): Promise<string> => {
  return "5";
};

// ------------------------------
// 🔹 CLASSE GENÉRICA
// ------------------------------

// Classe genérica que trabalha com qualquer tipo 'T'.
// Isso permite que a mesma classe funcione com números, strings ou objetos.
class GeneticNmber<T> {
  zeroValue: T; // valor inicial do tipo genérico
  sum: (x: T, y: T) => T; // função que recebe dois valores do tipo T e retorna T

  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

// Criando uma instância da classe genérica com tipo 'number'
// zeroValue = 0, sum = função que soma dois números
const myGenericNumber = new GeneticNmber<number>(0, (x: number, y: number) => {
  return x + y;
});

// ----------------------------------------
// Conceitos principais explicados:

// Conceito:        	    Explicação
// Generics <T>	          Permite criar funções ou classes que funcionam com qualquer tipo, mantendo a tipagem segura.
// Funções genéricas	    Usadas quando você quer que a função aceite e retorne diferentes tipos sem perder a tipagem.
// Classes genéricas	    Permitem que a mesma classe funcione com tipos variados, mantendo consistência e evitando duplicação.
// Promises tipadas	      Indica o tipo do valor que a Promise vai resolver (ex: Promise<string>).
