import logo from "../../assets/images/logo.png";

export default class Logo {
  apply() {
    const img = document.createElement("img");
    img.src = logo;
    img.width = 200;
    img.alt = "Logo saNKatsu";

    document.querySelector("body").appendChild(img);
  }
}
