// 수박수박수
function solution(n) {
  var answer = '';
  if (n%2 === 0) {
      answer = '수박'.repeat(n/2);
  } else {
      answer = '수박'.repeat(n/2+1).substring(0,n);
  }
  return answer;
}
// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges