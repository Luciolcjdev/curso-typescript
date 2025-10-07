// ------------------------------
// 🔹 INTERFACE
// ------------------------------

// Define um "contrato" que toda classe que a implementar precisa seguir.
// Aqui, qualquer classe que implemente IPerson deve ter:
// - uma propriedade 'id' do tipo number
// - um método 'sayMyName' que retorna uma string
interface IPerson {
  id: number;
  sayMyName(): string;
}

// ------------------------------
// 🔹 CLASSE IMPLEMENTANDO UMA INTERFACE
// ------------------------------

// A classe 'Person' implementa a interface 'IPerson',
// então ela é obrigada a possuir as propriedades e métodos declarados na interface.
class Person implements IPerson {
  // 🔸 'readonly' → o valor só pode ser atribuído no construtor; não pode ser alterado depois.
  readonly id: number;

  // 🔸 'protected' → a propriedade pode ser acessada dentro da classe e por subclasses (herdeiras),
  // mas não fora delas.
  protected name: string;

  // 🔸 'private' → a propriedade só pode ser acessada dentro desta classe.
  private age: number;

  // O construtor é executado ao criar um novo objeto da classe.
  // Ele inicializa os valores de 'id', 'name' e 'age'.
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  // Implementação do método obrigatório da interface.
  // Retorna o nome da pessoa.
  sayMyName(): string {
    return this.name;
  }
}

// ------------------------------
// 🔹 REESCRITA MAIS ENXUTA DA MESMA CLASSE
// ------------------------------

// O TypeScript permite declarar e inicializar propriedades diretamente no construtor.
// Isso evita repetição e deixa o código mais limpo.
class PersonRefact {
  constructor(
    readonly id: number, // equivale a declarar 'readonly id: number;' e 'this.id = id;'
    protected name: string, // equivale a declarar 'protected name: string;' e 'this.name = name;'
    private age: number // equivale a declarar 'private age: number;' e 'this.age = age;'
  ) {}
  // O construtor já cria e atribui os valores automaticamente.
}

// ------------------------------
// 🔹 HERANÇA (EXTENDS)
// ------------------------------

// A classe 'Employee' herda ('extends') tudo de 'Person'.
// Ou seja, ela tem acesso aos atributos e métodos públicos e protegidos da classe pai.
class Employee extends Person {
  // O construtor da subclasse deve chamar o construtor da classe base com 'super(...)'
  constructor(id: number, name: string, age: number) {
    super(id, name, age); // 'super' chama o construtor da classe pai (Person)
  }
}

// ------------------------------
// 🔹 INSTÂNCIA DE CLASSE
// ------------------------------

// Cria um novo objeto da classe 'Person'.
// O 'new' chama o construtor e atribui os valores passados.
const felipe = new Person(1, "Felipe", 23);

//  ---------------------------------------------
// Resumo dos conceitos importantes:

// Conceito:	            Explicação:
// interface	            Define um contrato que as classes devem seguir (métodos e propriedades obrigatórias).
// implements	            Faz uma classe “seguir” o contrato definido por uma interface.
// extends	              Indica herança — a classe filha herda os membros da classe pai.
// readonly	              Propriedade que só pode ser atribuída no construtor (não pode ser alterada depois).
// private	              Propriedade acessível somente dentro da própria classe.
// protected	            Propriedade acessível na classe e em suas subclasses.
// public (padrão)	      Propriedade acessível de qualquer lugar.
// super	                Chama o construtor (ou métodos) da classe pai dentro da subclasse.
