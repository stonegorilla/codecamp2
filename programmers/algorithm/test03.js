function kimseobang(seoul) {
    var answer = '';
    const x =seoul.indexOf('Kim');
//     for (var i=0; i<seoul.length; i++){

//         if(seoul[i] == "Kim"){
//             answer =  "김서방은 "+i + "에 있다"
//         }else{}
//     }
    answer = "김서방은 "+x + "에 있다"

    return answer;
}

console.log(kimseobang(['Jame','Kim']))


function solution(s) {
    var answer = '';

    if(s.length % 2 === 1){
        answer = s[(s.length-1)/2]
    }else{
        answer = s[(s.length/2)-1]+s[s.length/2]
    }

    return answer;
}

function solution1(a, b) {
    var answer = 0;
    // Math.min 과 Math.max 사용해도 됨
    if(a<b){
        for(var i=a; i<=b; i++){
        answer +=i;
        }
    }else if(a === b){
        answer +=a;
    }else{
        for(var i=b; i<=a; i++){
            answer +=i;
        }
    }


    return answer;
}


console.log(solution1(3,12))
