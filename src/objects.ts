// Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
  register(): string;
};

const user: User = {
  firstName: "John",
  age: 20,
  email: "john@gmail.com",
  orders: [{ productId: "1", price: 100 }],
  register() {
    return "a";
  },
};

const login = (message: string) => {
  login(user.password!);
};

// Union
type Author = {
  books: string[];
};

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

//Interfaces
interface UserInterface {
  readonly firstName: string;
  email: string;
  login(): string;
}

const emailUser: UserInterface = {
  email: "felipe@gmail.com",
  firstName: "Felipe",
  login() {
    return "felipe";
  },
};

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "lucio@gtr.com",
  firstName: "Lucio",
  books: [],
  login() {
    return "lucio";
  },
};
