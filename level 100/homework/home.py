def solution(string, ending):
    return string.endswith(ending)





def is_solved(board):
    N = len(board)
    expected = list(range(N * N))
    flat_board = [tile for row in board for tile in row]
    return flat_board == expected








def elevator_distance(floors):
    return sum(abs(floors[i] - floors[i + 1]) for i in range(len(floors) - 1))







def even_or_odd(s):
    even_sum = 0
    odd_sum = 0

    for char in s:
        digit = int(char)
        if digit % 2 == 0:
            even_sum += digit
        else:
            odd_sum += digit

    if even_sum > odd_sum:
        return "Even is greater than Odd"
    elif odd_sum > even_sum:
        return "Odd is greater than Even"
    else:
        return "Even and Odd are the same"
    




def battle(group1, group2):
    def power(group):
        return sum(ord(char) - ord('A') + 1 for char in group)
    
    power1 = power(group1)
    power2 = power(group2)
    
    if power1 > power2:
        return group1
    elif power2 > power1:
        return group2
    else:
        return "Tie!"