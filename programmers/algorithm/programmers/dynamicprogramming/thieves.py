def solution(money):
    answer = 0
    i1 = 2
    i2 = 2
    
    
    a1 = [[0,0,0],[money[0],0,0]]
    a2 = [[0,0,0],[0,money[1],0]]
    
    memo1 = 0
    memo2 = 0
    memo3 = 0
    memo4 = 0
    
    
    while(i1<len(money)):
        memo1 = a1[i1-1][0]+money[i1]
        memo2 = a1[i1-1][0]
        memo3 = a1[i1-1][1]
        memo4 = a1[i1-1][2]+money[i1]
        if(i1 != len(money)-1):   
            a1.append([memo3,max(memo1,memo4),memo2])
        else:
            a1.append([memo3,max(memo1,memo4),memo2])
        i1 = i1+1
        
    while(i2<len(money)):
        memo1 = a2[i2-1][0]+money[i2]
        memo2 = a2[i2-1][0]
        memo3 = a2[i2-1][1]
        memo4 = a2[i2-1][2]+money[i2]
        if(i2 != len(money)-1):   
            a2.append([memo3,max(memo1,memo4),memo2])
        else:
            a2.append([memo3,max(memo1,memo4),0])
        i2 = i2+1    
    

    answer = max(a1[len(a1)-1][0],a1[len(a1)-1][2],a2[len(a2)-1][0],a2[len(a2)-1][1])
    return answer

# def solution2(money):

#     answer = 0

#     memory = []
#     for i in range(0,len(money)):
#         if i == 0 :
#             memory.append(money[0]-money[1]-money[len(money)-1])
#         elif i == len(money)-1:
#             memory.append(money[len(money)-1]-money[0]-money[len(money)-2])
#         else:
#             memory.append(money[i]-money[i+1]-money[i-1])


#     answer += max(memory)
    
#     print(answer)

#     return memory
def solution3(money){
    return 0
}:



    



solution3([1,2,3,1])

