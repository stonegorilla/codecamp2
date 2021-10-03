function solution(sugar) {
  answer5 = 0;
  answer3 = 0;
  while (true) {
    if (sugar % 5 == 0) {
      answer5 += sugar / 5;
      break;
    }
    sugar -= 3;
    answer3 += 1;
    if (sugar < 0) {
      return -1;
    }
  }
  return "필요한봉지는 5Kg :" + answer5 + ",3Kg :" + answer3 + "입니다.";
}

console.log(solution(21));
