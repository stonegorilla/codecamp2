def solution(m, n, puddles):
    
    array = [[1 for col in range(m)] for row in range(n)]
    
    for i in puddles:
        array[i[1]-1][i[0]-1] = 0
    
    result = []
    for i in range (0,n):
        memory = []
        for j in range(0,m):
            if(i == 0 and j == 0):
                memory.append(1)
            elif(array[i][j] == 0):
                memory.append(0)
            elif(i == 0):
                memory.append(memory[j-1])
            elif(j==0):
                memory.append(result[i-1][j])
            else:
                memory.append(memory[j-1]+result[i-1][j])
        result.append(memory)
    
    return result[n-1][m-1]%1000000007



solution(4,3,[[2,2]])
