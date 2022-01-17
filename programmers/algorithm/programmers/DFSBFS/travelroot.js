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

function solution2(tickets) {
  var answer = [];
  if (tickets.length === 1 && tickets[0][0] === "ICN") {
    return tickets[0];
  } else if (tickets.length === 1) {
    return [];
  } else {
  }

  return solution2();
}

solution2([
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
]);
