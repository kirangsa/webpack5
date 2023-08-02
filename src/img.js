import Img from "./img.png";
import altText from './alt.txt'
function addImage() {
  const img = document.createElement("img");
  img.alt = altText;
  img.width = 400;
  img.src = Img;
  const body = document.querySelector("body");
  body.appendChild(img);
  console.log(img);
}

export default addImage;
