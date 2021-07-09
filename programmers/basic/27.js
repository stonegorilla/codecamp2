function bigNum(str) {
    let max = Number(str[0])
    for (let i=0; i<str.length; i++) {
        if(max<=Number(str[i])){
            max = Number(str[i])
        }else{}
    }
    console.log(max)
  }

function bigNum2(str){

}


bigNum("234")
bigNum("1923")
bigNum("2111")
bigNum("4342432835332832334")
// 이 함수는 문자중 가장 큰수를 찾는 과정이다. 문자가 들어가면 오류가 뜬다.
// 위의 코드는 버블정렬 알고리즘의 일부를 이용하였다. 시간 복잡도는 O(n) 이다.
// 위의 코드는 O(n) 이하로 시간 복잡도를 줄일 수 없다.

// 정렬의 방법은 아직도 연구하는 사람들이 있을 정도로 많다.
// 더이상 시간 복잡도를 줄일 수 없다라는 증명이 나오기 전까지는 연구는 계속 될 것이다.
