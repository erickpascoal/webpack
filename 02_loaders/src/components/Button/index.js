import "./styles.scss";

export default class Button {
  create(text) {
    const button = document.createElement("button");
    button.innerText = text;
    button.classList.add("btn");

    document.querySelector("body").appendChild(button);
  }
}
