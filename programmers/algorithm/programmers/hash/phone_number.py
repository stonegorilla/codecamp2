# def solution(phone_book):

#     for i in range(0, len(phone_book)):
#         for j in range(0,len(phone_book)):
#             if(i != j and len(phone_book[i]) <=len(phone_book[j])): 
                

#                 if(phone_book[i] == phone_book[j][0:len(phone_book[i])] ):
#                     return False
                   
#     return True

def solution(phone_book):
    phone_book.sort()

    for i in range(0, len(phone_book)-1):
        if(phone_book[i] == phone_book[i+1][0:len(phone_book[i])]):
            return False

    
    return True

    

print(solution(["119", "97674223", "1195524421"]))
print(solution(["123","456","789"]))