// interface → estrutura de objetos e contratos
// Use quando quer representar algo “real” do sistema: User, Product, ButtonProps, etc.

interface Window {
  appVersion: string;
}

// Outro arquivo pode redefinir a interface e adicionar mais propriedades
interface Window {
  theme: string;
}

// O TypeScript junta tudo automaticamente 👇
window.appVersion;
window.theme;

// type → tipos mais avançados e composições
// Use quando precisa criar tipos complexos ou derivados: combinações, tuplas, funções, unions, etc.

type ID = string | number; // union
type Point = [number, number]; // tuple

type User = {
  name: string;
  age: number;
};

type Admin = User & { role: "admin" }; // intersection
