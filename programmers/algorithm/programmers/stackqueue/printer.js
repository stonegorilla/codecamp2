function solution(priorities, location) {
  var answer = 0;
  let array = [];
  var i = 0;
  var max = Math.max(...priorities);
  i = priorities.indexOf(max);
  array.push(i);
  console.log(i);
  let ifirst = i;
  let temp = i;
  while (max !== 0) {
    i !== priorities.length - 1 ? i++ : (i = 0);
    while (true) {
      if (priorities[i] === max && i !== ifirst) {
        temp = i;
        array.push(i);
      }
      if (i === ifirst) {
        i = temp;
        temp = i;
        ifirst = i;
        break;
      }
      i !== priorities.length - 1 ? i++ : (i = 0);
    }
    max--;
  }
  answer = array.indexOf(location) + 1;
  return answer;
}

solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);
solution([2, 4, 8, 2, 9, 3, 3], 2);
