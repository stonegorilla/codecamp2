# def solution(s):
#     answer = int(s)
#     return answer

# solution("35")


# def solution(phone_number):
#     answer = ""
#     for i in range(0, len(phone_number)-4):
#         answer += "*"
    
#     answer = answer + phone_number[-4:]
   
#     return answer

# solution("434323232")

def solution(arr):
    answer = [arr[0]]
    for i in range(0, len(arr)-1):
        if(arr[i] != arr[i+1]):
            answer.append(arr[i+1])
    print(answer)    
    return answer


solution([1,1,3,3,0,1,1])

