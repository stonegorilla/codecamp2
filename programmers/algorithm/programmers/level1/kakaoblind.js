function solution(id_list, report, k) {
  let reported = new Array(id_list.length).fill(0);
  let answer = new Array(id_list.length).fill(0);
  const set = new Set(report);
  report = [...set];

  for (let i = 0; i < report.length; i++) {
    reported[id_list.indexOf(report[i].split(" ")[1])]++;
  }

  for (let i = 0; i < report.length; i++) {
    if (reported[id_list.indexOf(report[i].split(" ")[1])] >= k) {
      answer[id_list.indexOf(report[i].split(" ")[0])]++;
    }
  }

  return answer;
}

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);

solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);
