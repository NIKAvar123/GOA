

def solve(a,b):
    unique=[]
    for i in a:
        if i not in b:
            unique.append(i)
    for i in b:
        if i not in a:
            unique.append(i)
            
    return "".join(unique)        



def largest_sum(s):
    max_sum = 0
    tmp = 0
    for c in s:
        if c != '0':
            tmp += int(c)
        else:
            max_sum = max(max_sum, tmp)
            tmp = 0
    return max_sum


def comes_after(st, l): 
    for i in range(len(st)-1):
        if st[i] == l and st[i+1] == l:
            return True
    return False


