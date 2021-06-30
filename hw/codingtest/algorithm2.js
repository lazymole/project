// 가운데 글자 가져오기
function solution(s) {
  var answer;
  var char = s.length;
  if (char%2 !== 0) {
    answer = s[Math.floor(char/2)];
  } else {
    answer = s[(char/2)-1]+s[char/2];
  }
  return answer;
}

//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges