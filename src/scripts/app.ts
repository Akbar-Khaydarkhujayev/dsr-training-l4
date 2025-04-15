import imgSrc from "url:../assets/image.png";

const appDiv = document.getElementById("app")!;
console.log(appDiv);
appDiv.innerHTML = "Hello from TypeScript!";
console.log(imgSrc);
const img = document.createElement("img");
img.src = imgSrc; // directly use imgSrc as a string
img.alt = "Example image";
document.getElementById("app")!.appendChild(img);
