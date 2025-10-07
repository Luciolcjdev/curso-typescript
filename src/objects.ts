// ------------------------------
// 🔹 TYPE ALIAS (apelidos de tipos)
// ------------------------------

// O tipo 'Order' define a estrutura de um pedido.
type Order = {
  productId: string; // ID do produto
  price: number; // preço do produto
};

// O tipo 'User' define a estrutura de um usuário.
type User = {
  firstName: string; // nome do usuário
  age: number; // idade
  email: string; // e-mail
  password?: string; // senha opcional (o '?' indica que pode não existir)
  orders: Order[]; // lista de pedidos do usuário, baseada no tipo Order
  register(): string; // método obrigatório que retorna uma string
};

// Criação de um objeto que implementa o tipo 'User'
const user: User = {
  firstName: "John",
  age: 20,
  email: "john@gmail.com",
  orders: [{ productId: "1", price: 100 }],
  register() {
    return "a";
  },
};

// Função simples que recebe uma string.
// ⚠️ Aqui há um erro lógico: dentro da função, ela chama a si mesma recursivamente sem condição de parada.
const login = (message: string) => {
  // O operador '!' indica para o TypeScript que 'password' não é undefined.
  login(user.password!);
};

// ------------------------------
// 🔹 UNION & INTERSECTION TYPES
// ------------------------------

// O tipo 'Author' define um autor que possui uma lista de livros.
type Author = {
  books: string[];
};

// Aqui é feita uma INTERSEÇÃO entre Author e User.
// Isso significa que o objeto 'author' deve conter TODAS as propriedades de Author E User.
const author: Author & User = {
  age: 45,
  books: ["6"],
  email: "John@huji.com",
  firstName: "Renato",
  orders: [],
  register() {
    return "a";
  },
};

// ------------------------------
// 🔹 INTERFACES
// ------------------------------

// As interfaces também definem contratos de tipos, assim como 'type'.
// Mas elas são mais usadas para objetos e podem ser estendidas (herança de interfaces).

interface UserInterface {
  readonly firstName: string; // 'readonly' significa que não pode ser alterado após ser definido
  email: string;
  login(): string; // método que retorna uma string
}

// Criação de um objeto que implementa a interface 'UserInterface'
const emailUser: UserInterface = {
  email: "felipe@gmail.com",
  firstName: "Felipe",
  login() {
    return "felipe";
  },
};

// Interface separada que define um autor
interface AuthorInterface {
  books: string[];
}

// INTERSEÇÃO de duas interfaces usando '&'
// O objeto precisa seguir o contrato de ambas as interfaces.
const newAuthor: UserInterface & AuthorInterface = {
  email: "lucio@gtr.com",
  firstName: "Lucio",
  books: [],
  login() {
    return "lucio";
  },
};

// Resumo dos conceitos:

// type → cria apelidos de tipos (usado para objetos, unions, intersections, etc).

// interface → define contratos para objetos e classes (pode ser estendida).

// ? → torna uma propriedade opcional.

// readonly → impede a modificação da propriedade.

// & → interseção (une tipos, exigindo que o objeto cumpra todos).

// | → união (aceita um tipo ou outro).

// ! → non-null assertion, diz ao TS que algo não é null nem undefined.
