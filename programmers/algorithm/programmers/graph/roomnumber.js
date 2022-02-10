function solution(arrows) {
  let answer = 0;
  let points = [{ route: 8, point: [0, 0] }];
  let pointsroute = [];
  let memory = { route: 8, point: [0, 0] };
  let mechanism = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  function symmetry(number) {
    if (number === 0) return 4;
    else if (number === 1) return 5;
    else if (number === 2) return 6;
    else if (number === 3) return 7;
    else if (number === 4) return 0;
    else if (number === 5) return 1;
    else if (number === 6) return 2;
    else if (number === 7) return 3;
    else return -1;
  }
  for (let i = 0; i < arrows.length; i++) {
    points.push({
      route: arrows[i],
      point: [
        memory.point[0] + mechanism[arrows[i]][0],
        memory.point[1] + mechanism[arrows[i]][1],
      ],
    });

    points.push({
      route: arrows[i],
      point: [
        memory.point[0] + 2 * mechanism[arrows[i]][0],
        memory.point[1] + 2 * mechanism[arrows[i]][1],
      ],
    });
    memory = {
      route: arrows[i],
      point: [
        points[points.length - 1].point[0],
        points[points.length - 1].point[1],
      ],
    };
  }

  // 여기까지가 점들 변환

  for (let i = 0; i < points.length; i++) {
    let pushtopr = true;

    for (let j = 0; j < pointsroute.length; j++) {
      if (
        points[i].point[0] === pointsroute[j].point[0] &&
        points[i].point[1] === pointsroute[j].point[1]
      ) {
        pushtopr = false;
        if (!pointsroute[j].routes.includes(points[i].route)) {
          pointsroute[j].routes.push(points[i].route);
          answer++;
        }
        if (points[i + 1]) {
          if (!pointsroute[j].routes.includes(symmetry(points[i + 1].route)))
            pointsroute[j].routes.push(symmetry(points[i + 1].route));
        }
      }
    }

    if (pushtopr) {
      pointsroute.push({
        point: [points[i].point[0], points[i].point[1]],
        routes: points[i + 1]
          ? [points[i].route, symmetry(points[i + 1].route)]
          : [points[i].route],
      });
    }
  }

  return answer;
}

solution([6, 6, 6, 4, 4, 4, 2, 2, 2, 0, 0, 0, 1, 6, 5, 5, 3, 6, 0]);
