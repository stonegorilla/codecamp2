// 얘는 좀 노가다로 해봅시다.

function days(month){
    if(month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12 ){
        console.log("31")
    }else if(month===4 || month===6 || month===9 || month === 11){
        console.log("30")
    }else if(month===2){
        console.log("28")
    }else{
        console.log("이상한것 입력 하지 마세용")
    }
}

days(13)
days(12)
days(11)
days(10)
