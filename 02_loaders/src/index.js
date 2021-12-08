import Button from "./components/Button";
import Logo from "./components/Logo";
import Title from "./components/Ttitle";
import warningTemplate from "./templates/warning.html";
import "./styles/warning.scss";
import text from "./assets/files/text.txt";

// loader de css
const title = new Title();
title.create("Erick Pascoal dos Santos");

//loader de imagem
const logo = new Logo();
logo.apply();

//loader de sass
const button = new Button();
button.create("Clique aqui");

//spread com babel
const teste = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, ...rest } = teste;
console.log(a);
console.log(b);
console.log(rest);
const teste2 = { ...teste };
console.log(teste2);

//loader de html
document.querySelector("body").innerHTML += warningTemplate;

//loader de arquivos txt e etc (aparentemente depreciado)
document.querySelector("body").innerHTML += text;
