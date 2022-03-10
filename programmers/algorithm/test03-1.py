def solution(s):
    
    answer = ''
    if len(s)%2 == 1:
        answer = s[int(len(s)/2)]
    if len(s)%2 == 0:
        answer = s[int(len(s)/2)-1] +s[int(len(s)/2)]
    print(answer)
    return answer
solution('abcdef')