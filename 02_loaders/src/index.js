import Button from "./components/Button";
import Logo from "./components/Logo";
import Title from "./components/Ttitle";

const title = new Title();

title.create("Erick Pascoal dos Santos");

const logo = new Logo();

logo.apply();

const button = new Button();
button.create("Clique aqui");

const teste = { a: 1, b: 2, c: 3, d: 4 };

const { a, b, ...rest } = teste;

console.log(a);
console.log(b);
console.log(rest);

const teste2 = { ...teste };

console.log(teste2);
