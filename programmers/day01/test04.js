// function solution(s) {
//     let answer = true;

//     s1 = Number(s);
//     if(s == s1){
//         answer = true;
//     }else{
//         answer = false;
//     }

//     return answer;
// }

// console.log(solution('1234'))
// console.log(solution('abdc'))

const month = {
    1 : 31,
    2 : 29,
    3 : 31,
    4 : 30,
    5 : 31,
    6 : 30,
    7 : 31,
    8 : 31,
    9 : 30,
    10 : 31,
    11 : 30,
    12 : 31
}

// const week = {
//     0 : 'FRI',
//     1 : 'SAT',
//     2 : 'SUM',
//     3 : 'MON',
//     4 : 'TUE',
//     5 : 'WED',
//     6 : 'THU'
// }

function solution1(a, b) {

    // let answer = '';
    // // 모든 일수를 저장하는 변수
    // let fullDays = 0;
    // for (let i = 1; i < a; i++){
    //     fullDays = fullDays + month[i];
    // }
    // fullDays = fullDays + (b-1);

    // answer = week[fullDays%7]
    // return answer;
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const days = new Date(2016, a-1, b).getDay();
    answer = week[days];
    return answer;
}

console.log(solution1(4,19))
