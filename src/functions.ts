const sum = (x: number, y: number): string | number => {
  return (x + y).toString();
};

const value = sum(1, 2);

interface MathFunc {
  (x: number, y: number): number;
}

const soma: MathFunc = (x: number, y: number): number => {
  return x + y;
};

const sub: MathFunc = (x: number, y: number): number => {
  return x - y;
};

const log = (message: string): void => {
  console.log(message);
};
