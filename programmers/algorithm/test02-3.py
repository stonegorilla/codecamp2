def solution(n):
    answer = ""
    for i in range(0,n):
        if(i %2 == 0):
            answer = answer+ "수"
        if(i%2 == 1):
            answer = answer+ "박"
   
    return answer


solution(4)