function solution(people, limit) {
  let array = [];
  var answer = 0;
  people = people.sort((a, b) => b - a);
  for (let i = 0; i < people.length; i++) {
    let inserted = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j].length < 2 && array[j][0] + people[i] <= limit) {
        array[j].push(people[i]);
        inserted = true;
        break;
      }
    }
    if (!inserted) array.push([people[i]]);
  }
  answer = array.length;

  return answer;
}

solution([70, 50, 80, 50], 100);
