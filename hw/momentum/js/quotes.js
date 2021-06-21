const quotes = [
  {
    quote: "청약저축통장은 빨리 만들 수록 좋다.",
    author: "집 없는 서울러"
  },
  {
    quote: "장래희망이 없다면 일단 공부해라.",
    author: "대학 나온 사람"
  },
  {
    quote: "twitch.tv/hanryang1125 구독과 좋아요 부탁 드려요.",
    author: "풍뎅"
  },
  {
    quote: "퇴사하고 싶다.",
    author: "반도의 직장인"
  },
  {
    quote: "말은 똑바로 해야지! 불로소득이 있는 상태에서 노동을 그만두고 싶다.",
    author: "퇴사 경험자"
  },
  {
    quote: "심야엔 역시 공포 게임.",
    author: "곰크리트"
  },
  {
    quote: "어디까지 알아보고 오셨어요?",
    author: "네 연봉"
  },
  {
    quote: "크리스마스색 검은 번개 둥근 몸매",
    author: "과나"
  },
  {
    quote: "냉면엔 갈비",
    author: "먹잘알"
  },
  {
    quote: "늦었다고 생각할 때가 진짜 늦었다. 그러니 당장 시작해라.",
    author: "박명수"
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;