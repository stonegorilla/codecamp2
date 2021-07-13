function kimseobang(seoul) {
    var answer = '';
    for (var i=0; i<seoul.length; i++){

        if(seoul[i] == "Kim"){
            answer =  "김서방은"+i + "에 있다."
        }else{}
    }

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

function solution(a, b) {
    var answer = 0;
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
