function solution(n) {
    let answer = -1;

    for(let i=0; n>=i*i; i++){
        if(n===i*i){
            answer = i*i + 2*i + 1;
        }

    }
    console.log(answer);
}


solution(121)