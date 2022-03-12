def solution(triangle):
    answer = 0
    array = []
    array.append(triangle[0])
    
    for i in range (1,len(triangle)):
        memory = []    
        
        for j in range(0,len(triangle[i])):
            if(j==0):
                memory.append(array[i-1][0]+triangle[i][j])
            elif(j == len(triangle[i])-1):
                memory.append(array[i-1][len(triangle[i])-2]+triangle[i][j])
            else:
                memory.append(max(array[i-1][j-1],array[i-1][j])+triangle[i][j])

        array.append(memory)
    
    answer = max(array[len(array)-1])
    return answer


# solution([[7],[3,8]])
solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])

