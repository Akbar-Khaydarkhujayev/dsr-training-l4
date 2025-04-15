import imgSrc from "../assets/image.png";

const appDiv = document.getElementById("app")!;

appDiv.innerHTML = "Hello from TypeScript!";

const img = document.createElement("img");
img.src = imgSrc;
img.alt = "Example image";
appDiv.appendChild(img);
