// function solution(tickets) {
//   var answer = [];

//   let ticketssorted = tickets.sort();
//   let ticketlength = ticketssorted.length;
//   for (let i = 0; i < ticketlength; i++) {
//     for (let j = 0; j < ticketssorted.length; j++) {
//       if (answer.length === 0 && ticketssorted[j][0] === "ICN") {
//         answer.push(ticketssorted[j][0]);
//         answer.push(ticketssorted[j][1]);
//         ticketssorted.splice(j, 1);

//       } else if (ticketssorted[j][0] === answer[answer.length - 1]) {
//         answer.push(ticketssorted[j][1]);
//         ticketssorted.splice(j, 1);

//       } else {
//       }
//     }
//   }

//   return answer;
// }

// function solution2(tickets) {
//   let ticketssorted = tickets.sort();
//   let answer = aaa("ICN", ticketssorted, [["ICN"]]);
//   console.log(answer);
//   return answer;
// }

// function aaa(start, tickets, array) {
//   let newstart = "";
//   let newtickets = [];
//   for (let i = 0; i < tickets.length; i++) {
//     if (tickets.length === 1) {
//       return [[...array, tickets[0][1]]];
//     }
//     if (tickets[i][0] === start) {
//       array.push(tickets[i][1]);
//       newstart = tickets[i][1];
//       tickets.splice(i, 1);
//     }
//   }
//   newtickets = JSON.parse(JSON.stringify(tickets));
//   let newarray = JSON.parse(JSON.stringify(array));
//   console.log("aaa", newstart);
//   console.log("bbb", newtickets);

//   return [...aaa(newstart, newtickets, newarray)];
// }

// solution2([
//   ["ICN", "SFO"],
//   ["ICN", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "ICN"],
//   ["ATL", "SFO"],
// ]);

function solution3(tickets) {
  let answer = [];
  let ticketssorted = tickets.sort();
  answer = bbb("ICN", ticketssorted, tickets.length - 1);

  return answer[0];
}

function bbb(start, tickets, itr) {
  let routearrays = [];

  if (itr === 0) {
    return [[tickets[0][1]]];
  }
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === start) {
      routearrays = [
        ...routearrays,
        ...bbb(
          tickets[i][1],
          tickets.filter((_, index) => index !== i),
          itr - 1
        ).map((data) => [start, ...data]),
      ];
    }
  }

  return routearrays;
}

solution3([
  ["ICN", "CNA"],
  ["CNA", "JPN"],
  ["CNA", "TTR"],
]);

solution3([
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
]);
