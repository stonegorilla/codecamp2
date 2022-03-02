function solution(genres, plays) {
  let answer = [];
  const playsbygenres = genres.reduce((accu, curr, idx) => {
    accu[curr] = (accu[curr] || 0) + plays[idx];
    return accu;
  }, {});
  console.log(playsbygenres);
  const playsbygenressort = Object.entries(playsbygenres)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  console.log(playsbygenressort);
  const genressortarr = Object.keys(playsbygenressort);
  console.log(genressortarr);
  for (let i = 0; i < genressortarr.length; i++) {
    let arr = [];
    for (let j = 0; j < plays.length; j++) {
      if (genres[j] === genressortarr[i]) {
        arr.push({ idx: j, genre: genres[j], number: plays[j] });
      }
    }

    arr.sort((a, b) => {
      return b.number - a.number;
    });
    answer.push(arr[0].idx);
    arr[1] ? answer.push(arr[1].idx) : console.log("a");
  }
  return answer;
}

// function solution2(genres, plays) {
//   var dic = {};
//   genres.forEach((t, i) => {
//     dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
//   });

//   var dupDic = {};
//   return genres
//     .map((t, i) => ({ genre: t, count: plays[i], index: i }))
//     .sort((a, b) => {
//       if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
//       if (a.count !== b.count) return b.count - a.count;
//       return a.index - b.index;
//     })
//     .filter((t) => {
//       if (dupDic[t.genre] >= 2) return false;
//       dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
//       return true;
//     })
//     .map((t) => t.index);
// }

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);

// solution2(
//   ["classic", "pop", "classic", "classic", "pop"],
//   [500, 600, 150, 800, 2500]
// );
