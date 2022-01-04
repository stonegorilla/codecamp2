function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let info = { timeAll: 0, trucks: [] };
  let i = 0;
  while (truck_weights.length !== 0) {
    info.timeAll += 1;
    info.trucks.push({ weight: truck_weights[0], time: 0 });
    info.trucks.forEach((data) => (data.time += 1));
    if (info.trucks[0].time > bridge_length) info.trucks.shift();
    truck_weights.shift();
  }
  console.log(info.trucks);
  return answer;
}

solution(2, 10, [7, 4, 5, 6]);
