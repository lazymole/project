console.log("hello, vanilla.");

// 왼쪽 클릭 시 이동하는 함수
const leftArrow = document.getElementById("left-arrow");
leftArrow.addEventListener("click", leftMove);

const imageEl = document.querySelector(".carousel-top > .img-container > .images > img")

// 수정을 해보기로 했습니다
function leftMove () {
  const imageIndex = parseInt(imageEl.classList[1]);
  if ( 1 < imageIndex ) {
    imageEl.classList.remove(`${imageIndex}`);
    imageEl.classList.add(`${imageIndex-1}`);
    imageEl.src = `./images/image-${imageIndex-1}.png`;
  } else {
    imageEl.classList.remove(`${imageIndex}`);
    imageEl.classList.add('5');
    imageEl.src = `./images/image-5.png`;
  }
}
// 오른쪽 클릭 시 이동하는 함수
const rightArrow = document.getElementById("right-arrow");
rightArrow.addEventListener("click", rightMove);
function rightMove() {
  const imageIndex = parseInt(imageEl.classList[1]);
  if ( imageIndex < 5 ) {
    imageEl.classList.remove(`${imageIndex}`);
    imageEl.classList.add(`${imageIndex+1}`);
    imageEl.src = `./images/image-${imageIndex+1}.png`;
  } else {
    imageEl.classList.remove(`${imageIndex}`);
    imageEl.classList.add('1');
    imageEl.src = `./images/image-1.png`;
  }
}

// dot 클릭
const dots = document.querySelectorAll(".carousel-bottom > .dots");
dots.forEach(element => {
  element.addEventListener("click", () => {
    const dotIndex = element.innerText;
    const imageIndex = parseInt(imageEl.classList[1]);
    imageEl.classList.remove(`${imageIndex}`);
    imageEl.classList.add(dotIndex);
    imageEl.src = `./images/image-${dotIndex}.png`;
  })
});
