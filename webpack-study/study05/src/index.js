import helloWorld from "./hello-world";
import imgSrc from "./assets/test.png";

helloWorld();

const img = document.createElement("img");
img.src = imgSrc;
document.body.appendChild(img);
