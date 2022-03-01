function solution(routes) {
  let answer = 0;
  let cut = -30000;
  routes = routes.sort((a, b) => a[0] - b[0]);
  console.log(routes);

  for (let i = 0; i < routes.length; i++) {
    if (cut < routes[i][0]) {
      answer++;
      cut = routes[i][1];
    }

    if (cut > routes[i][1]) {
      cut = routes[i][1];
    }
  }

  return answer;
}

solution([
  [-20, -15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
]);
