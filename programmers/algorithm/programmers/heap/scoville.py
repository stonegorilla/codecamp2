def solution(scoville, K):
    answer = 0
    appendnumber = 0
    
    
    while(min(scoville) < K):
        if(len(scoville) == 1 and min(scoville)<K ) :
            answer = -1
            break
        answer += 1
        appendnumber += min(scoville)
        del scoville[scoville.index(min(scoville))]
        appendnumber += 2*min(scoville)
        del scoville[scoville.index(min(scoville))]
        scoville.append(appendnumber)
        appendnumber = 0
        
    
    return answer


solution([2, 1, 3, 9, 10, 12],7)

import heapq

def solution2(scoville,K):
    answer = 0
    
    heapq.heapify(scoville)
    
    while(scoville[0] < K):
        if(len(scoville) == 1 and scoville[0]<K ) :
            answer = -1
            break
        answer += 1
        
        small = heapq.heappop(scoville)
        
        small2 = heapq.heappop(scoville)
        heapq.heappush(scoville, (small+2*small2))
    
       
        
    print(scoville)
    return answer

solution2([2, 1, 3, 9, 10, 12],7)