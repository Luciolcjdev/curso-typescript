// ------------------------------
// 🔹 FUNÇÕES TIPADAS E UNION TYPES
// ------------------------------

// A função 'sum' recebe dois números (x e y)
// e retorna algo que pode ser do tipo 'string' OU 'number'.
// Isso é definido pelo "union type" -> ': string | number'
const sum = (x: number, y: number): string | number => {
  // O resultado (x + y) é convertido para string com .toString()
  // Logo, o retorno real aqui é uma string
  return (x + y).toString();
};

// Ao chamar a função, 'value' será do tipo 'string | number'.
// Ou seja, pode ser uma string ou um número — o TypeScript não tem como saber.
const value = sum(1, 2);

// ------------------------------
// 🔹 INTERFACE PARA FUNÇÕES
// ------------------------------

// Interfaces também podem descrever a *assinatura* de funções.
// Aqui, a interface 'MathFunc' define uma função que:
// - Recebe dois parâmetros do tipo number (x e y)
// - Retorna um número
interface MathFunc {
  (x: number, y: number): number;
}

// A constante 'soma' implementa a interface 'MathFunc'
// Logo, ela deve seguir exatamente o mesmo formato: (x: number, y: number) => number
const soma: MathFunc = (x: number, y: number): number => {
  return x + y;
};

// Outro exemplo de função que segue o mesmo contrato da interface.
// Também precisa retornar um number.
const sub: MathFunc = (x: number, y: number): number => {
  return x - y;
};

// ------------------------------
// 🔹 TIPO 'void' (sem retorno útil)
// ------------------------------

// O tipo 'void' indica que a função NÃO retorna nenhum valor.
// Ela apenas executa alguma ação (ex: log, alerta, etc.)
const log = (message: string): void => {
  console.log(message); // imprime uma mensagem no console
};
