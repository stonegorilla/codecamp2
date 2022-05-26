function solution(lottos, win_nums) {
  let ranking = 7;
  let gap = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] !== 0) {
      if (win_nums.includes(lottos[i])) ranking--;
    } else {
      gap++;
    }
  }

  if (ranking === 7) ranking = 6;
  if (gap === 6) gap = 5;

  return [ranking - gap, ranking];
}
