function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let info = { timeAll: 0, trucks: [] };
  let i = 0;
  let weightstruck = 0;
  while (truck_weights.length !== 0 || info.trucks.length !== 0) {
    // 먼저 기존에 있던 트럭을 한칸씩 옮김
    info.timeAll += 1;
    info.trucks.forEach((data) => (data.time += 1));
    if (info.trucks.length !== 0 && info.trucks[0].time > bridge_length) {
      weightstruck = weightstruck - info.trucks[0].weight;
      info.trucks.shift();
    }
    // 새로운 트록 추가
    if (
      truck_weights.length !== 0 &&
      truck_weights[0] + weightstruck <= weight
    ) {
      info.trucks.push({ weight: truck_weights[0], time: 1 });
      weightstruck = weightstruck + truck_weights[0];
      truck_weights.shift();
    }
  }

  answer = info.timeAll;
  console.log(answer);
  return answer;
}

solution(2, 10, [7, 4, 5, 6]);
solution(100, 100, [10, 10, 10]);
solution(100, 90, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
solution(63, 72, [70, 6, 5, 2, 70]);
