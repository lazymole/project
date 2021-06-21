const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const bgUrl = bgImage.src = `./img/${chosenImage}`;
// document.body.appendChild(bgImage);

document.getElementsByTagName("body")[0].style.backgroundImage = `url(${bgUrl})`;