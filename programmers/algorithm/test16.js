function solution(answers) {
    let answer = [];
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;

    // 1번사람 정답개수

    for(let i=0; i<answers.length; i++){
        if(i%5 === 0 && answers[i] === 1) score1++;
        if(i%5 === 1 && answers[i] === 2) score1++;
        if(i%5 === 2 && answers[i] === 3) score1++;
        if(i%5 === 3 && answers[i] === 4) score1++;
        if(i%5 === 4 && answers[i] === 5) score1++;

    }

    for(let i=0; i<answers.length; i++){
        if(i%2 === 0 && answers[i] === 2) score2++;
        if(i%8 === 1 && answers[i] === 1) score2++;
        if(i%8 === 3 && answers[i] === 3) score2++;
        if(i%8 === 5 && answers[i] === 4) score2++;
        if(i%8 === 7 && answers[i] === 5) score2++;

    }

    for(let i=0; i<answers.length; i++){
        if((i%10 === 0 || i%10 === 1)  && answers[i] === 3) score3++;
        if((i%10 === 2 || i%10 === 3)  && answers[i] === 1) score3++;
        if((i%10 === 4 || i%10 === 5)  && answers[i] === 2) score3++;
        if((i%10 === 6 || i%10 === 7)  && answers[i] === 4) score3++;
        if((i%10 === 8 || i%10 === 9)  && answers[i] === 5) score3++;


    }

    if(score1 > score2 && score1 > score3) answer = [1];
    else if(score2 > score1 && score2 > score3) answer = [2];
    else if(score3 > score1 && score3 > score2) answer = [3];
    else if(score1 === score2 && score2 === score3) answer = [1,2,3];
    else if(score1 === score2) answer = [1,2];
    else if(score2 === score3) answer = [2,3];
    else if(score1 === score3) answer = [1,3];
    else {}


    console.log(answer);
}

solution([4,5,3,2,1,3,4,3,2,3,2,3,3,3,3,2,2,2,1])