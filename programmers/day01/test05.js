function solution(n){
    let answer = 0
    for(let i=1; i<=n; i++){

        if(n%i === 0){
            answer += i
        }else{}

    }
    return answer;
}

console.log(solution(12))

function solution1(n){
    let answer = 0
    for(let i=1; i<=n; i++){
        if(Number.isInteger(n/i) === true){
            answer +=i
        }
    }
    return answer
}

console.log(solution(12))

function solution2(n){
    let result = 0;

    new Array(n)
    .fill(1)
    .filter((num, idx) => {
        n % (num+ idx) === 0
            ? result = result+ (num+idx)
            : null
    })
}

function solution3(n){
    let n1 = String(n).length
    let sum = 0

    for(i=0; i<n1; i++){
        sum += n%10
        n = parseInt(n/10)
    }

    return sum

}

console.log(solution3(123432))