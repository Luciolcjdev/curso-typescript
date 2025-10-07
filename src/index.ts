// =====================
// TIPOS PRIMITIVOS
// =====================

// number: para valores numéricos
let age: number = 5;
// Use number sempre que quiser garantir que a variável só receba números

// string: para textos
const firstName: string = "Lucio";
// Strings são usadas para nomes, mensagens, qualquer texto

// boolean: true ou false
const isValid: boolean = true;
// Boolean é útil em flags, validações, condições

// any: permite qualquer tipo de valor (evite usar, só se necessário)
let idk: any = 5;
idk = "12"; // agora é string
idk = true; // agora é boolean
// O TypeScript não vai reclamar, mas perde a segurança de tipos

// =====================
// ARRAYS
// =====================

// Array de números
const ids: number[] = [1, 2, 3, 4, 5];

// Array de booleanos
const booleans: boolean[] = [true, false, true, false];

// Array de strings
const names: string[] = ["Lucio", "Catarinna", "Heloiza"];

// =====================
// TUPLAS
// =====================

// Tupla: array com tipos fixos em posições definidas
const person: [number, string] = [1, "Lucio"];
// Útil quando você quer garantir ordem e tipo dos elementos (ex: [id, nome])

// Lista de Tuplas: array de tuplas
const people: [number, string][] = [
  [1, "Lucio"],
  [2, "Catarinna"],
  [3, "Heloiza"],
];
// Útil para tabelas, listas de registros

// =====================
// UNION TYPES
// =====================

// Variável que pode ter mais de um tipo
const productId: string | number = "1";
// Pode ser útil quando IDs podem vir como número ou string (ex: do banco ou API)

// =====================
// ENUMS
// =====================

// Enum: conjunto de constantes nomeadas
enum Direction {
  Up = 1, // 1
  Down = 2, // 2
  Left = "Esquerda", // string personalizada
  Right = 4, // 4
}

// Usando enum
const direction = Direction.Left;
console.log(direction); // imprime "Esquerda"
// Enums ajudam a evitar strings/literals espalhadas pelo código e aumentam a legibilidade

// =====================
// TYPE ASSERTIONS
// =====================

// Quando o TypeScript não consegue inferir corretamente o tipo
const productName: any = "Mouse";

// Dizer explicitamente que é string (duas formas)
let itemId = productName as string; // forma mais comum
// ou
let itemId2 = <string>productName; // forma alternativa, menos usada em React

// Type Assertions são úteis em casos de integração com APIs ou dados desconhecidos

// --------------------------------------------------

// Resumo de conceitos importantes:

// 1. Tipos primitivos (number, string, boolean) garantem segurança e previnem bugs.

// 2. Arrays e Tuplas ajudam a estruturar dados de forma previsível.

// 3. Union Types permitem flexibilidade quando uma variável pode ter mais de um tipo.

// 4. Enums substituem strings ou números mágicos e tornam o código mais legível.

// 5. Type Assertions dizem ao TypeScript “confie em mim, sei o tipo disso”.
