// 범위 내 임의의 16진수 얻기
function getRandomHexInt() {
  min = 0;
  max = 16777215;
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomHexInt = randomInt.toString(16).padStart(6, "0");
  return randomHexInt;
}

// 클릭 이벤트
const click = document.getElementById('clickbtn');
click.addEventListener('click', eventHandler);
function eventHandler() {
  const colorCode = getRandomHexInt();
  const bodyColor = document.querySelector("body");
  const bodyColorText = document.getElementById("colortext");
  bodyColor.style.backgroundColor = `#${colorCode}`;
  bodyColorText.innerText = `:#${colorCode}`;
}