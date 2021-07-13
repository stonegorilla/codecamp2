function solution(num) {
    var answer = '';

    answer = num % 2 === 0 ? 'Even' : 'Odd' ;
    // if (num%2==0){
    //     answer = "Even";
    // }else{
    //     answer = "Odd"
    // }

    return answer;
}
// 홀짝 구하기 삼항 연산자 사용하면 한줄로 나타내기 가능

function solution1(arr) {
    var answer = 0;
    for (var i = 0; i<arr.length; i++ ){
        answer +=arr[i];
    }
    answer = answer/arr.length
    return answer;
}

// 평균 구하기 간단하지만 많이 쓰임
// 국어 , 영어, 수학

function solution2(n) {
    let arr = [];

    for(var i=0; i<n; i++){
        if(i%2 == 0){
            arr.push('수');
        }else{
            arr.push('박');
        }
    }
    var answer = arr.join('');
    return answer;
}

// 수박수박수 이런것 구하기

function solution3(n) {
    let arr = '';

    for(var i=0; i<n; i++){
        if(i%2 == 0){
            arr = arr + '수';
        }else{
            arr = arr + '박';
        }
    }
    var answer = arr;
    return answer;
}

console.log(solution3(10))
console.log(solution3(11))

function solution4(n) {
    rule = '';
    for (var i=0; i<n; i++){
        rule = (i%2 ? rule+ '수' : rule+ '박');
    }
    return rule;
}

console.log(solution4(12))
console.log(solution4(4))
