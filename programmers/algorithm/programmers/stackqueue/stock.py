def solution(prices):
    answer = []
    for i in range(0,len(prices)):
        for j in range(i,len(prices)):
            if(prices[j]<prices[i]):
                answer.append(j-i)
                break
            if(j == len(prices)-1):
                answer.append(len(prices)-1-i)
    return answer