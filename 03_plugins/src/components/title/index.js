import "./styles.css";

export default class Title {
  create(text) {
    const h1 = document.createElement("h1");
    h1.innerText = text;
    h1.classList.add("title");

    document.querySelector("body").appendChild(h1);
  }
}
