function temperature(num){
    if(num<18 && num>=10){
        console.log("조금춥네요")
    }else if(num<23 && num>=19){
        console.log("날씨가 좋네요")
    }else if(num>=24 && num<30){
        console.log("날씨가 조금 덥네요")
    }else{
        console.log("온도계가 고장났네요")
    }
}

temperature(26)
temperature(14)
temperature(9)